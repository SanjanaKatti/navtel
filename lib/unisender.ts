type SubscribeInput = {
  email: string;
  fullName: string;
  phone?: string;
  company?: string;
  country?: string;
  tag: string;
};

type SubscribeResult = { ok: true } | { ok: false; error: string };

/** Digits with a leading +, as Unisender requires for the phone field. */
function internationalPhone(value: string | undefined): string {
  if (!value || value === "—") return "";
  const compact = value.replace(/[^\d+]/g, "");
  return /^\+\d{7,15}$/.test(compact) ? compact : "";
}

function fieldValue(value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  return trimmed && trimmed !== "—" ? trimmed : "";
}

/**
 * Adds a contact to the Unisender subscription list.
 * The API key stays on the server.
 */
export async function subscribeToUnisender(
  input: SubscribeInput,
): Promise<SubscribeResult> {
  const apiKey = process.env.UNISENDER_API_KEY;
  const listId = process.env.UNISENDER_LIST_ID;

  if (!apiKey || !listId) {
    return { ok: false, error: "Unisender is not configured." };
  }

  const body = new URLSearchParams();
  body.set("format", "json");
  body.set("api_key", apiKey);
  body.set("list_ids", listId);
  body.set("fields[email]", input.email);
  body.set("fields[Name]", input.fullName);
  const phone = internationalPhone(input.phone);
  if (phone) body.set("fields[phone]", phone);
  const company = fieldValue(input.company);
  if (company) body.set("fields[company]", company);
  const country = fieldValue(input.country);
  if (country) body.set("fields[country]", country);
  // 3 = consent was already collected on the form, so no second confirmation letter.
  body.set("double_optin", "3");
  body.set("overwrite", "2");
  body.set("tags", input.tag);

  let response: Response;
  try {
    response = await fetch("https://api.unisender.com/en/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch (error) {
    console.error("[NAVTEL_UNISENDER] Network error:", error);
    return { ok: false, error: "Could not reach Unisender." };
  }

  const payload = (await response.json().catch(() => null)) as {
    result?: { person_id?: number };
    error?: string;
    code?: string;
  } | null;

  if (!response.ok || !payload || payload.error || !payload.result) {
    const error = payload?.error || `Unisender HTTP ${response.status}`;
    console.error("[NAVTEL_UNISENDER] Subscribe failed:", payload?.code, error);
    return { ok: false, error };
  }

  console.log("[NAVTEL_UNISENDER] Contact added:", payload.result.person_id);
  return { ok: true };
}

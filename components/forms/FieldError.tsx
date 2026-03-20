"use client";

export function FieldError({
  id,
  message,
}: {
  id?: string;
  message?: string;
}) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="text-xs sm:text-sm text-red-600 ml-1 mt-0.5"
    >
      {message}
    </p>
  );
}

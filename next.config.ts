import type { NextConfig } from "next";
import { execSync } from "node:child_process";
import { randomUUID } from "node:crypto";

/**
 * Generate a deterministic build ID from the current git commit when possible.
 * Falls back to a random UUID if git isn't available (e.g. in a stripped
 * container). Having a human-recognizable build ID makes it much easier to
 * diagnose stale-deploy problems: `curl -I` on any page response includes the
 * build id via the `x-navtel-build` header below, and you can compare it
 * against `git rev-parse HEAD` on the server to see whether `next start`
 * actually got restarted after the last build.
 */
function computeBuildId(): string {
  try {
    const sha = execSync("git rev-parse --short=12 HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (sha) return sha;
  } catch {
    // not a git checkout or git not available
  }
  return randomUUID();
}

const BUILD_ID = computeBuildId();

const nextConfig: NextConfig = {
  generateBuildId: async () => BUILD_ID,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "x-navtel-build", value: BUILD_ID }],
      },
    ];
  },
};

export default nextConfig;

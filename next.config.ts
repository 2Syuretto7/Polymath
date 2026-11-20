import type { NextConfig } from "next";

/**
 * One id per deployment. Browsers compare the id they were built with against the live one
 * (`/api/version`) and reload when it changes, so every device picks up a new version on its own.
 */
const BUILD_ID =
  process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_GIT_COMMIT_SHA || `local-${Date.now().toString(36)}`;

const config: NextConfig = {
  env: { NEXT_PUBLIC_BUILD_ID: BUILD_ID },
  serverExternalPackages: ["@node-rs/argon2", "@electric-sql/pglite"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default config;

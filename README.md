# Polymath

A private, single-learner university for mathematics and philosophy, live at
[polymath.arnavraja.in](https://polymath.arnavraja.in).

One Learn button, a graph of lessons from school arithmetic to graduate seminars,
and Parton, a Feynman-style tutor that gives hints and never solutions.

## Stack

| Part | Choice |
| --- | --- |
| App | Next.js 15 (App Router), React 19, TypeScript |
| Hosting | Vercel, deploying from `main` |
| Database | Neon Postgres (embedded PGlite when developing locally) |
| Sign-in | One passphrase, hashed with Argon2id; signed 90-day session cookies |

## One-time setup (owner)

1. **Vercel.** Sign in at vercel.com with GitHub, choose *Add New → Project*, and import this repository. Keep every default.
2. **Database.** In the Vercel project, open *Storage → Create Database → Neon* and connect it to the project. This adds `DATABASE_URL` automatically.
3. **Session secret.** In *Settings → Environment Variables*, add `SESSION_SECRET` with any long random value (for example the output of `openssl rand -base64 48`).
4. **Domain.** In *Settings → Domains*, add `polymath.arnavraja.in`. Vercel shows a CNAME value. At GoDaddy, open DNS for `arnavraja.in` and add a CNAME record with name `polymath` and that value.
5. **Redeploy** once from the Vercel dashboard, then visit the site and choose your passphrase. Sign-up closes as soon as your account exists.

`ANTHROPIC_API_KEY` is needed from Phase 3 (Parton) onwards.

## Developing

```bash
npm install
npm run dev        # http://localhost:3000, uses ./.pglite as its database
npm test           # unit tests
npm run typecheck
```

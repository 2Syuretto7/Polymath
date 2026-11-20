/** The id of the deployment now live. Public: it says nothing beyond which build is serving. */
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { id: process.env.NEXT_PUBLIC_BUILD_ID ?? "" },
    { headers: { "Cache-Control": "no-store, max-age=0", "CDN-Cache-Control": "no-store", "Vercel-CDN-Cache-Control": "no-store" } },
  );
}

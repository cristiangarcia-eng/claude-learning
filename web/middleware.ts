export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lessons/:path*",
    "/quiz/:path*",
    "/progress/:path*",
  ],
};

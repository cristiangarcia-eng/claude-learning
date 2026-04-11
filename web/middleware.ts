import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isValidLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, api routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.\w+$/) // static files with extensions
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale prefix
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const hasLocale = firstSegment && isValidLocale(firstSegment);

  // If no locale in the URL, redirect to default locale prefix
  if (!hasLocale) {
    // Detect preferred locale from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language") || "";
    let detectedLocale = DEFAULT_LOCALE;
    for (const locale of SUPPORTED_LOCALES) {
      if (acceptLanguage.toLowerCase().includes(locale)) {
        detectedLocale = locale;
        break;
      }
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // Auth check for protected routes
  const pathWithoutLocale = "/" + segments.slice(1).join("/");
  const protectedPrefixes = ["/dashboard", "/lessons", "/progress"];
  const isProtected = protectedPrefixes.some((prefix) =>
    pathWithoutLocale.startsWith(prefix)
  );

  if (isProtected) {
    const sessionCookie =
      request.cookies.get("authjs.session-token") ||
      request.cookies.get("__Secure-authjs.session-token");

    if (!sessionCookie) {
      const locale = firstSegment;
      const loginUrl = new URL(`/${locale}/login`, request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files with extensions
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)",
  ],
};

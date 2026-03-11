import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt, updateSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Public routes, login, api, _next are not protected by default
  const isProtectedAdmin = pathname.startsWith("/admin");
  const isProtectedTenant = pathname.startsWith("/tenant");

  if (!isProtectedAdmin && !isProtectedTenant) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("session")?.value;
  const session = await decrypt(sessionCookie);

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  if (isProtectedAdmin && session.role !== "ADMIN") {
    const url = request.nextUrl.clone();
    url.pathname = "/tenant";
    return NextResponse.redirect(url);
  }

  if (isProtectedTenant && session.role !== "TENANT") {
    // If Admin tries to access tenant page, maybe let them or redirect to admin
    if (session.role === "ADMIN") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Refresh session
  const res = NextResponse.next();
  try {
    const updated = await updateSession(request);
    if (updated) {
      res.cookies.set({
        name: "session",
        value: updated.newSession,
        httpOnly: true,
        expires: updated.expiresAt,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }
  } catch (_error) {
    // skip
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};

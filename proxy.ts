import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth-server";

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define protected admin routes
  const isAdminRoute = path.startsWith("/main");

  // Only check authentication for admin routes
  if (isAdminRoute) {
    // Full session validation with database check
    const session = await getSession();

    // Redirect to home if not authenticated
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Check if user has admin role
    if (session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main/:path*"],
};

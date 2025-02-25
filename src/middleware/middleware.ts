// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { verifyToken } from "@/utils/auth";

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value || "";

//   try {
//     verifyToken(token);
//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: ["/admin :path*"],
// };




import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/utils/auth";

export async function middleware(request: NextRequest) {
  // Get token from cookies or Authorization header
  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("Authorization")?.split(" ")[1] ||
    "";

  // Verify token
  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Attach user data to request headers (useful for role-based access)
  request.headers.set("user-id", decoded.userId);
  request.headers.set("user-name", decoded.name);
  request.headers.set("user-role", decoded.role);

  return NextResponse.next();
}

// ✅ Fix matcher pattern
export const config = {
  matcher: ["/admin/:path*"], // Fixed incorrect spacing
};

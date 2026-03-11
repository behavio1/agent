import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export type Role = "ADMIN" | "TENANT";

export type SessionPayload = {
  id: string;
  email: string;
  role: Role;
};

const secretKey = process.env.SESSION_SECRET || "default-secret-key-manga-apartment-mgmt-2026";
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as SessionPayload;
  } catch (_error) {
    return null;
  }
}

export async function createSession(userId: string, email: string, role: Role) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ id: userId, email, role });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  if (!parsed) return;

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  
  // Note: middleware will handle actually setting the response cookie.
  // We use this function in middleware.
  const payload: SessionPayload = {
    id: parsed.id,
    email: parsed.email,
    role: parsed.role,
  };
  const newSession = await encrypt(payload);

  return { newSession, expiresAt };
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function requireAuth(roles: Role[]) {
  const session = await getSession();
  if (!session) {
    return null;
  }
  
  if (roles.length > 0 && !roles.includes(session.role)) {
    return null;
  }
  
  return session;
}

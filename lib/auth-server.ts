import "server-only";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";

/**
 * Get the current session on the server side
 * Uses React cache to memoize the result during a render pass
 */
export const getSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
});

/**
 * Get the current user from the session
 * Returns null if no session exists
 */
export const getCurrentUser = cache(async () => {
  const session = await getSession();
  return session?.user ?? null;
});

/**
 * Verify that a user is authenticated
 * Throws an error if no session exists
 */
export const requireAuth = cache(async () => {
  const session = await getSession();

  if (!session?.user) {
    throw new Error("Unauthorized: No active session");
  }

  return session;
});

/**
 * Verify that a user has a specific role
 * Throws an error if the user doesn't have the required role
 */
export const requireRole = cache(async (role: string) => {
  const session = await requireAuth();

  if (session.user.role !== role) {
    throw new Error(`Unauthorized: Required role "${role}"`);
  }

  return session;
});

/**
 * Check if the current user has a specific role
 * Returns false if no session or role doesn't match
 */
export const hasRole = cache(async (role: string) => {
  const session = await getSession();
  return session?.user?.role === role;
});

/**
 * Check if the current user is an admin
 */
export const isAdmin = cache(async () => {
  return await hasRole("admin");
});

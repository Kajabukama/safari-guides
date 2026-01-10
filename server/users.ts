"use server";

import { db } from "@/database/drizzle";
import { member, user, userProfile } from "@/database/schema";
import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/auth-server";
import { generateId } from "better-auth";
import { eq, inArray, not } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getCurrentUserWithProfile = async () => {
  const session = await requireAuth();

  const currentUser = await db.query.user.findFirst({
    where: eq(user.id, session.user.id),
  });

  if (!currentUser) {
    redirect("/");
  }

  return {
    ...session,
    currentUser,
  };
};

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      success: true,
      message: "Signed in successfully.",
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: e.message || "An unknown error occurred.",
    };
  }
};

export const signUp = async (
  email: string,
  password: string,
  name: string,
  userType: string,
  country: string
) => {
  try {
    const signUpResponse = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        userType,
      },
    });

    // Create user profile with country information
    if (signUpResponse?.user?.id) {
      await db.insert(userProfile).values({
        id: generateId(),
        userId: signUpResponse.user.id,
        country,
        available: true,
        verified: false,
        reviewCount: 0,
      });
    }

    return {
      success: true,
      message: "Please check your email for verification.",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An unknown error occurred.",
    };
  }
};

export const getUsers = async (organizationId: string) => {
  try {
    const members = await db.query.member.findMany({
      where: eq(member.organizationId, organizationId),
    });

    const users = await db.query.user.findMany({
      where: not(
        inArray(
          user.id,
          members.map((member) => member.userId)
        )
      ),
    });

    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
};

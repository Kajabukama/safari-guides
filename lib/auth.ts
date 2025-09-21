import { db } from "@/database/drizzle";

import OrganizationInvitationEmail from "@/components/emails/organization-invitation";
import ForgotPasswordEmail from "@/components/emails/reset-password";
import VerifyEmail from "@/components/emails/verify-email";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { lastLoginMethod, organization } from "better-auth/plugins";
import { Resend } from "resend";
import { admin, member, owner, guide, traveler } from "@/lib/auth/permissions";
import { getActiveOrganization } from "@/server/organizations";
import { schema } from "@/database/schema";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME as string} <${process.env.EMAIL_SENDER_ADDRESS as string}>`,
        to: user.email,
        subject: "Verify your email",
        react: VerifyEmail({ username: user.name, verifyUrl: url }),
      });
    },
    sendOnSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME as string} <${process.env.EMAIL_SENDER_ADDRESS as string}>`,
        to: user.email,
        subject: "Reset your password",
        react: ForgotPasswordEmail({ username: user.name, resetUrl: url, userEmail: user.email }),
      });
    },
    requireEmailVerification: true,
  },
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const organization = await getActiveOrganization(session.userId);
          return {
            data: {
              ...session,
              activeOrganizationId: organization?.id,
            },
          };
        },
      },
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
      userType: {
        type: "string",
        input: true,
      },
      isOnboarded: {
        type: "boolean",
        input: false,
      },
    },
  },
  plugins: [
    organization({
      async sendInvitationEmail(data) {
        const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/accept-invitation/${data.id}`;
        resend.emails.send({
          from: `${process.env.EMAIL_SENDER_NAME as string} <${process.env.EMAIL_SENDER_ADDRESS as string}>`,
          to: data.email,
          subject: "You've been invited to join our organization",
          react: OrganizationInvitationEmail({
            email: data.email,
            invitedByUsername: data.inviter.user.name,
            invitedByEmail: data.inviter.user.email,
            teamName: data.organization.name,
            inviteLink,
          }),
        });
      },
      roles: {
        owner,
        admin,
        member,
        guide,
        traveler,
      },
    }),
    lastLoginMethod(),
    nextCookies(),
  ],
});

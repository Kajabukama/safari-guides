import { db } from "@/database/drizzle";
import { schema } from "@/database/schema";

import ForgotPasswordEmail from "@/components/emails/reset-password";
import VerifyEmail from "@/components/emails/verify-email";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      if (!resend) {
        console.warn("Resend API key not available, skipping email verification");
        return;
      }
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
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
      if (!resend) {
        console.warn("Resend API key not available, skipping password reset email");
        return;
      }
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: "Reset your password",
        react: ForgotPasswordEmail({ username: user.name, resetUrl: url, userEmail: user.email }),
      });
    },
    requireEmailVerification: true,
  },
  databaseHooks: {
    // session: {
    //   create: {
    //     before: async (session) => {
    //       const organization = await getActiveOrganization(session.userId);
    //       return {
    //         data: {
    //           ...session,
    //           activeOrganizationId: organization?.id,
    //         },
    //       };
    //     },
    //   },
    // },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [
    // Temporarily disabled organization plugin to fix build issue
    // organization({
    //   async sendInvitationEmail(data) {
    //     if (!resend) {
    //       console.warn("Resend API key not available, skipping invitation email");
    //       return;
    //     }
    //     const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/accept-invitation/${data.id}`;

    //     await resend.emails.send({
    //       from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
    //       to: data.email,
    //       subject: "You've been invited to join our organization",
    //       react: OrganizationInvitationEmail({
    //         email: data.email,
    //         invitedByUsername: data.inviter.user.name,
    //         invitedByEmail: data.inviter.user.email,
    //         teamName: data.organization.name,
    //         inviteLink,
    //       }),
    //     });
    //   },
    //   roles: {
    //     owner,
    //     admin,
    //     member,
    //   },
    // }),
    nextCookies(),
  ],
});

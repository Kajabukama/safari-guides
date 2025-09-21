"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { GoogleIcon, AppleIcon } from "@/components/icons";

export const SocialButtons = () => {
  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  const signInWithApple = async () => {
    await authClient.signIn.social({
      provider: "apple",
      callbackURL: "/dashboard",
    });
  };
  return (
    <div className="flex flex-row gap-4">
      <Button variant="outline" className="flex-1" type="button" onClick={signInWithGoogle}>
        <GoogleIcon />
        Signup with Google
      </Button>
      <Button variant="outline" className="flex-1" type="button" onClick={signInWithApple}>
        <AppleIcon />
        Signup with Apple
      </Button>
    </div>
  );
};

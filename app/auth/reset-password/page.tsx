import { ResetPasswordForm } from "@/components/forms/reset-password-form";
import { BrandLogo } from "@/components/brand-logo";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <BrandLogo showLabel={false} />
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}

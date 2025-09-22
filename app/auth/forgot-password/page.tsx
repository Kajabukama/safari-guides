import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import { BrandLogo } from "@/components/brand-logo";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <BrandLogo showLabel={false} />
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

import { SignupForm } from "@/components/forms/signup-form";
import { BrandLogo } from "@/components/brand-logo";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <BrandLogo showLabel={false} />
        <SignupForm />
      </div>
    </div>
  );
}

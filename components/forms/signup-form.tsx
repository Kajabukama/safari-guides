"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { signUp } from "@/server/users";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AtSignIcon, Loader2, LockKeyholeIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";
import { ContinueWithDivider } from "@/components/continue-with-divider";
import { SignupFormInput, signupSchema, userType } from "@/lib/validation";
import { RadioSelect } from "@/components/radio-select";
import { SocialButtons } from "@/components/forms/social-buttons";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<SignupFormInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      userType: "guide",
    },
  });

  async function onSubmit(values: SignupFormInput) {
    setIsLoading(true);
    const { success, message } = await signUp(
      values.email,
      values.password,
      values.name,
      values.userType
    );
    if (success) {
      toast.success(`${message as string}`);
      router.push("/dashboard");
    } else {
      toast.error(message as string);
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Signup with your Google or Apple account or Sign up with and email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">
                <SocialButtons />
                <ContinueWithDivider label="Or continue with" />
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem className="space-x-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4"
                          >
                            {userType.map((type) => (
                              <RadioSelect
                                key={type.id}
                                field={field}
                                value={type.value}
                                label={type.label}
                                description={type.description}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <UserRoundIcon
                                size={18}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              />
                              <Input
                                type="text"
                                className="pl-10"
                                placeholder="John Doe"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <AtSignIcon
                                size={18}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              />
                              <Input
                                type="text"
                                className="pl-10"
                                placeholder="me@example.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex flex-col gap-2">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <LockKeyholeIcon
                                  size={18}
                                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                />
                                <Input
                                  type="password"
                                  className="pl-10"
                                  placeholder="password"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Link
                        href="/auth/forgot-password"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Signup"}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/signin" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}

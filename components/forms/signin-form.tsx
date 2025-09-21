"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { signIn } from "@/server/users";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AtSignIcon, Loader2, LockKeyholeIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ContinueWithDivider } from "@/components/continue-with-divider";
import { SocialButtons } from "@/components/forms/social-buttons";
import { LoginFormInput, loginSchema } from "@/validation/auth";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const lastMethod = authClient.getLastUsedLoginMethod();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<LoginFormInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormInput) {
    setIsLoading(true);
    const { success, message } = await signIn(values.email, values.password);
    if (success) {
      toast.success(message as string);
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
            Login with your Google, Facebook, Apple or email account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">
                <SocialButtons />
                <ContinueWithDivider label="Or continue with" />
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative">
                          {lastMethod === "email" && (
                            <Badge className="absolute bg-primary text-sm right-3 top-1/2 transform -translate-y-1/2 ">
                              last used
                            </Badge>
                          )}
                          <div className="relative">
                            <AtSignIcon
                              size={18}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                            />
                            <Input
                              type="text"
                              className="pl-10"
                              placeholder="email@example.com"
                              {...field}
                            />
                          </div>
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
                                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                />
                                <Input
                                  type="password"
                                  className="pl-10"
                                  placeholder="Your password"
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
                    {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Login"}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/signup" className="underline underline-offset-4">
                    Sign up
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

import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GlobeIcon, FacebookIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/validation/auth";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { authService } from "@/lib/auth-service";

interface SigninFormProps {
  onSwitchModal: (modalType: "signup") => void;
  onClose: () => void;
}

function SigninForm({ onSwitchModal, onClose }: SigninFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      if (response.success) {
        toast.success("Login successful!");
        onClose();
        // Optionally trigger a page refresh or redirect
        // window.location.reload();
      } else {
        toast.error(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      if (provider === "google") {
        await authService.loginWithGoogle();
      } else {
        await authService.loginWithFacebook();
      }
      // Note: For social login, the redirect happens in the service
      // so we don't need to close the modal here
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : `${provider} login failed. Please try again.`;
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle>Log in</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Welcome to Africa Guides</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Tabs
              value={loginMethod}
              onValueChange={(value:string) => setLoginMethod(value as "email" | "phone")}
              className="w-full"
            >
              <TabsList className="">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <MailIcon size={16} />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <PhoneIcon size={16} />
                  Phone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <MailIcon
                            size={18}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                          />
                          <Input
                            type="email"
                            className="pl-10"
                            placeholder="name@example.com"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="phone" className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <PhoneIcon
                            size={18}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                          />
                          <Input
                            type="tel"
                            className="pl-10"
                            placeholder="+255 123 456 789"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Continue"}
            </Button>
          </form>
        </Form>

        <Separator className="my-6" />

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSocialLogin("google")}
          >
            <GlobeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSocialLogin("facebook")}
          >
            <FacebookIcon className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>

        <div className="text-center">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <button
            type="button"
            className="font-medium hover:underline"
            onClick={() => onSwitchModal("signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default SigninForm;

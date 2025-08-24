"use client";

import React, { useState } from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GlobeIcon, FacebookIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/validation/auth";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

interface SigninFormProps {
  onSwitchModal: (modalType: "signup") => void;
  onClose: () => void;
}

function SigninForm({ onSwitchModal, onClose }: SigninFormProps) {
  const [isLoading, setIsLoading] = useState(false);

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
    console.log(data);
    try {
      toast.error("Login successful!");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      toast.error("Login successful!");
    } catch (error) {
      toast.error(`${provider} login failed. Please try again.`);
      setIsLoading(false);
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">Welcome back</DialogTitle>
        <DialogDescription className="text-base">
          Please enter your email and password to sign in.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4 mt-4">
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
            </div>

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

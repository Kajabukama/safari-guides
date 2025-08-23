import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  Globe as GlobeIcon,
  Facebook as FacebookIcon,
  MapPin as MapPinIcon,
  User as UserIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "@/lib/validation/auth";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { authService } from "@/lib/auth-service";

interface SignupFormProps {
  onSwitchModal: (modalType: "login") => void;
  onClose: () => void;
}

function SignupForm({ onSwitchModal, onClose }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      password: "",
      confirmPassword: "",
      userType: "traveler",
      bio: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const response = await authService.signup(data);

      if (response.success) {
        toast.success("Account created successfully!");
        onClose();
        // Optionally trigger a page refresh or redirect
        // window.location.reload();
      } else {
        toast.error(response.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      if (provider === "google") {
        await authService.loginWithGoogle();
      } else {
        await authService.loginWithFacebook();
      }
      // Note: For social signup, the redirect happens in the service
      // so we don't need to close the modal here
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : `${provider} signup failed. Please try again.`;
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign up</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Join Africa Guides</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4"
                    >
                      <div
                        className={`flex items-start space-x-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors ${
                          field.value === "guide" ? "border-primary bg-primary/10" : "border-border"
                        }`}
                      >
                        <RadioGroupItem value="guide" id="guide" className="mt-1" />
                        <Label htmlFor="guide" className="flex-1 cursor-pointer">
                          <div className="flex flex-col space-y-1">
                            <div className="font-medium text-xl">Tour Guide</div>
                            <div className="text-sm text-muted-foreground">
                              I want to offer my services as a guide
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div
                        className={`flex items-start space-x-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors ${
                          field.value === "traveler"
                            ? "border-primary bg-primary/10"
                            : "border-border"
                        }`}
                      >
                        <RadioGroupItem value="traveler" id="traveler" className="mt-1" />
                        <Label htmlFor="traveler" className="flex-1 cursor-pointer">
                          <div className="flex flex-col space-y-1">
                            <div className="font-medium text-xl">Traveler</div>
                            <div className="text-sm text-muted-foreground">
                              I&apos;m looking for guides and experiences
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <UserIcon
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        />
                        <Input type="text" className="pl-10" placeholder="First name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                      <Input type="email" className="pl-10" placeholder="Email" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <MapPinIcon
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        type="text"
                        className="pl-10"
                        placeholder="Arusha, Tanzania"
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
                    <Input type="password" placeholder="Create a password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </Form>

        <Separator className="my-6" />

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSocialSignup("google")}
          >
            <GlobeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSocialSignup("facebook")}
          >
            <FacebookIcon className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>

        <div className="text-center">
          <span className="text-muted-foreground">Already have an account? </span>
          <button
            type="button"
            className="font-medium hover:underline"
            onClick={() => onSwitchModal("login")}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupForm;

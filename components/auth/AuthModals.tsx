"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  Globe as GlobeIcon,
  Facebook as FacebookIcon,
  MapPin as MapPinIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { AuthModalsProps, LoginFormData, SignupFormData } from "@/interfaces/auth";

const AuthModals: React.FC<AuthModalsProps> = ({ isOpen, modalType, onClose, onSwitchModal }) => {
  const loginForm = useForm<LoginFormData>();
  const signupForm = useForm<SignupFormData>();

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    onClose();
  };

  const onSignupSubmit = (data: SignupFormData) => {
    console.log("Signup data:", data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        {modalType === "login" && (
          <>
            <DialogHeader>
              <DialogTitle>Log in</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Welcome to Africa Guides</h3>

              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                <Tabs defaultValue="email" className="w-full">
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
                    <div className="space-y-2">
                      <div className="relative">
                        <MailIcon
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          type="email"
                          id="email"
                          className="pl-10"
                          placeholder="name@example.com"
                          {...loginForm.register("email", { required: "Email is required" })}
                        />
                      </div>
                      {loginForm.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...loginForm.register("password", { required: "Password is required" })}
                      />
                      {loginForm.formState.errors.password && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="phone" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <PhoneIcon
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          type="tel"
                          id="phone"
                          className="pl-10"
                          placeholder="+255 123 456 789"
                          {...loginForm.register("phone", { required: "Phone number is required" })}
                        />
                      </div>
                      {loginForm.formState.errors.phone && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        id="phone-password"
                        placeholder="Enter your password"
                        {...loginForm.register("password", { required: "Password is required" })}
                      />
                      {loginForm.formState.errors.password && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <Button type="submit" className="w-full mt-4">
                  Continue
                </Button>
              </form>

              <Separator className="my-6" />

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <GlobeIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" type="button">
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
        )}

        {modalType === "signup" && (
          <>
            <DialogHeader>
              <DialogTitle>Sign up</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Join Africa Guides</h3>

              <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-base font-medium">I am a</Label>
                  <RadioGroup
                    onValueChange={(value) =>
                      signupForm.setValue("userType", value as "traveler" | "guide")
                    }
                    className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4"
                  >
                    <div className="flex items-start space-x-3 rounded-lg border p-4 hover:bg-muted/50 data-[state=checked]:border-primary transition-colors">
                      <RadioGroupItem value="traveler" id="traveler" className="mt-1" />
                      <Label htmlFor="traveler" className="flex-1 cursor-pointer">
                        <div className="flex flex-col space-y-1">
                          <div className="font-medium">Traveler</div>
                          <div className="text-sm text-muted-foreground">
                            I&apos;m looking for guides and experiences
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3 rounded-lg border p-4 hover:bg-muted/50 data-[state=checked]:border-primary transition-colors">
                      <RadioGroupItem value="guide" id="guide" className="mt-1" />
                      <Label htmlFor="guide" className="flex-1 cursor-pointer">
                        <div className="flex flex-col space-y-1">
                          <div className="font-medium">Tour Guide</div>
                          <div className="text-sm text-muted-foreground">
                            I want to offer my services as a guide
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  {signupForm.formState.errors.userType && (
                    <p className="text-sm text-destructive">
                      {signupForm.formState.errors.userType.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <MailIcon
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <Input type="email" id="signup-email" className="pl-10" placeholder="Email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <PhoneIcon
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="tel"
                      id="signup-phone"
                      className="pl-10"
                      placeholder="+255 123 456 789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <MapPinIcon
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="text"
                      id="location"
                      className="pl-10"
                      placeholder="Arusha, Tanzania"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input type="password" id="signup-password" placeholder="Create a password" />
                </div>

                <div className="space-y-2">
                  <Input type="password" id="confirmPassword" placeholder="Confirm your password" />
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <Separator className="my-6" />

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <GlobeIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" type="button">
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
        )}
      </DialogContent>
    </Dialog>
  );
};
export default AuthModals;

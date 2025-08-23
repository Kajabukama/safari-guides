"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AuthModalsProps } from "@/interfaces/auth";
import SignupForm from "@/components/auth/signup";
import SigninForm from "@/components/auth/signin";

const AuthModals: React.FC<AuthModalsProps> = ({ isOpen, modalType, onClose, onSwitchModal }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        {modalType === "login" && <SigninForm onSwitchModal={onSwitchModal} onClose={onClose} />}

        {modalType === "signup" && <SignupForm onSwitchModal={onSwitchModal} onClose={onClose} />}
      </DialogContent>
    </Dialog>
  );
};
export default AuthModals;

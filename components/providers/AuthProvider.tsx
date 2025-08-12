"use client";
import React, { useState, createContext, useContext } from "react";
import AuthModals from "../auth/AuthModals";
import { User } from "@/interfaces/auth";

type ModalType = "login" | "signup" | null;
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  openLoginModal: () => void;
  openSignupModal: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openLoginModal = () => {
    setModalType("login");
    setIsModalOpen(true);
  };
  const openSignupModal = () => {
    setModalType("signup");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const switchModal = (type: ModalType) => {
    setModalType(type);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        openLoginModal,
        openSignupModal,
        logout,
      }}
    >
      {children}
      <AuthModals
        isOpen={isModalOpen}
        modalType={modalType}
        onClose={closeModal}
        onSwitchModal={switchModal}
      />
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

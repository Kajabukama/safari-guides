export type ModalType = "login" | "signup" | null;

export interface AuthModalsProps {
  isOpen: boolean;
  modalType: ModalType;
  onClose: () => void;
  onSwitchModal: (type: ModalType) => void;
}

export interface LoginFormData {
  email?: string;
  phone?: string;
  password: string;
}

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  location: string;
  bio?: string;
  userType: "traveler" | "guide";
}

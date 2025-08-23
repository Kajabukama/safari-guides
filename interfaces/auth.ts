export type ModalType = "login" | "signup" | null;

export interface AuthModalsProps {
  isOpen: boolean;
  modalType: ModalType;
  onClose: () => void;
  onSwitchModal: (type: Exclude<ModalType, null>) => void;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  isGuide?: boolean;
  image?: string;
  location?: string;
  rating?: number;
  experience?: string;
  languages?: string[];
  tourType?: string;
  groupSize?: string;
  available?: boolean;
  specialties?: string[];
  price?: string;
  verified?: boolean;
  reviewCount?: number;
  joinedDate?: string;
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

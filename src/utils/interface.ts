import { UserCredential } from "firebase/auth";
import { Dispatch, ElementType, ReactNode, SetStateAction } from "react";

export interface INavItem {
  name: string;
  path: string;
  Icon: ElementType;
}
export interface INavbarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
export interface ISidebarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IUserData {
  id?: number;
  name: string;
  email: string;
  img: string;
}
export interface IUserCardContainerProps {
  userData: IUserData;
}

export interface IModalProps {
  id: string;
  children: ReactNode;
  className?: string;
}
export interface IAuthFromInitialValue {
  name?: string;
  email: string;
  password: string;
  image?: File | null;
}

export interface IFirebaseAuthContextType {
  user?: IUserData | null;
  login?: (credentials: IAuthFromInitialValue) => Promise<UserCredential>;
  signUp?: (U: IAuthFromInitialValue) => Promise<UserCredential>;
  signOut?: () => void;
  isLoading: boolean;
  setIsLoading?: (T: boolean) => void;
  authStatus: "authenticated" | "unauthenticated";
}

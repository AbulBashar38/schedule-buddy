import { Dispatch, ElementType, SetStateAction } from "react";

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
  id: number;
  name: string;
  email: string;
  img: string;
}
export interface IUserCardContainerProps {
  userData: IUserData;
}

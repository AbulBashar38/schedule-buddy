import { Dispatch, ElementType, SetStateAction } from "react";

export interface INavItem {
  name: string;
  path: string;
  Icon: ElementType;
}
export interface INavbarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

import { AiOutlineUser } from "react-icons/ai";
import { INavItem } from "./interface";
import { CiBoxList } from "react-icons/ci";

export const navItems: INavItem[] = [
    {
        name: 'All users',
        Icon: AiOutlineUser,
        path: '/all-users'
    },
    {
        name: 'Appointment List',
        Icon: CiBoxList,
        path: '/appointment-list'
    },

];

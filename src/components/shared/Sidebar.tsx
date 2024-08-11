import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../utils/constant";
import { INavItem } from "../../utils/interface";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = () => {
    return (

        <ul className="menu bg-base-100 text-base-content min-h-full w-72 p-4 relative">
            <section className="mb-[2em] h-[40px] flex items-center justify-center">
                <h1 className="text-[22px] font-bold cursor-pointer"><span className="text-primary">Schedule</span><span className="text-black">Buddy</span></h1>
            </section>
            <section className="flex flex-col gap-4">
                {navItems?.map((items: INavItem, i: number) => <li key={i} ><NavLink
                
                    aria-label="close sidebar"
                    className={({ isActive }) => {
                        console.log({ isActive });

                        return clsx(
                            "h-[50px] text-[16px] flex hover:bg-primary hover:text-white active:!bg-[#2a3afa]",
                            isActive ? 'text-white bg-primary' : ''
                        )
                    }}
                    to={items.path} ><items.Icon size={22} /> {items?.name}</NavLink>
                </li>)}
            </section>
            <section className="absolute left-[45%] bottom-10 translate-x-[-50%] ">
                <li><Link to='#' onClick={() => { }}
                    className="h-[50px] text-[16px] flex hover:bg-primary hover:text-white active:!bg-[#2a3afa]"><BiLogOutCircle />Logout
                </Link></li>
            </section>
        </ul>
    );
}

export default Sidebar;
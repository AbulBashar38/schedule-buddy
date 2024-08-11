import { Outlet } from "react-router";
import Sidebar from "./shared/Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <main className={"drawer lg:drawer-open"}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={sidebarOpen} />
            <section className="drawer-content px-5">
                <Navbar setSidebarOpen={setSidebarOpen} />
                <div className="bg-[#EFF3FF] w-full h-[calc(100vh-67px)] rounded-lg">
                    <Outlet />
                </div>
            </section>
            <section className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => setSidebarOpen(false)
                }></label>
                <Sidebar />
            </section>
        </main>
    );
}

export default Layout;
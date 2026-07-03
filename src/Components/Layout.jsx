import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import { Header } from "./Header";
import { useState } from "react";
import { Footer } from "./Footer";




export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col min-h-screen">

            {/* Fixed TopBar */}
            <div className="fixed top-0 left-0 w-full z-[999]">
                <TopBar />
            </div>
            <Header isOpen={isOpen } setIsOpen={setIsOpen} />

            {/* Content (push down because header is fixed) */}
            <main className="pt-[120px] flex-1">
                <Outlet />
            </main>

            <Footer/>
        </div>
    );
}
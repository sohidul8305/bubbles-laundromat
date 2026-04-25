import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayouts = () => {
    return (

        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#0a0a0b]">
            
            {/* Navbar Section */}
            <Navbar />

            <main className="flex-grow w-full">
                <Outlet />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default RootLayouts;
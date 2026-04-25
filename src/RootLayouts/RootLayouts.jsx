import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white selection:bg-blue-100">
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
                <Navbar />
            </header>

            <main className="flex-grow pt-24">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

// এই লাইনটি অবশ্যই থাকতে হবে
export default RootLayouts;
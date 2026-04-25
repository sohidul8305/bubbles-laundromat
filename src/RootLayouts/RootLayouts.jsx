import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayouts = () => {
    return (


        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#0f1115] selection:bg-blue-500/30">
            

            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none z-0"></div>

            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none z-0"></div>

            {/* Navbar Section */}
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* Main Content Area */}
            <main className="flex-grow pt-24 relative z-10">
                <Outlet />
            </main>

            {/* Footer Section */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
};

export default RootLayouts;
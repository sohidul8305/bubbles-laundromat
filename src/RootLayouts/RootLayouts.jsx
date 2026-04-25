import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayouts = () => {
    return (
        /* bg-white: সব পেজের জন্য সাদা ব্যাকগ্রাউন্ড। 
           selection:bg-blue-100: সাদা থিমের সাথে সামঞ্জস্যপূর্ণ সিলেকশন কালার।
        */
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white selection:bg-blue-100">
            
            {/* হালকা ডেকোরেটিভ গ্লো (সাদা থিমের জন্য অপ্টিমাইজড) */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50 blur-[120px] pointer-events-none z-0"></div>

            {/* Navbar Section */}
            <div className="relative z-50 shadow-sm bg-white/80 backdrop-blur-md">
                <Navbar />
            </div>

            {/* Main Content Area */}
            <main className="flex-grow pt-24 relative z-10">
                <Outlet />
            </main>

            {/* Footer Section */}
            <div className="relative z-10 border-t border-gray-100 bg-gray-50/50">
                <Footer />
            </div>
        </div>
    );
};

export default RootLayouts;
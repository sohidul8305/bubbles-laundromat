const RootLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white selection:bg-blue-100">
            {/* Navbar - এটাকে sticky রাখা ভালো */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
                <Navbar />
            </header>

            {/* Content Area - pt-24 ব্যবহার করা হয়েছে যাতে নেভবারের নিচে কন্টেন্ট না ঢাকা পড়ে */}
            <main className="flex-grow pt-24">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
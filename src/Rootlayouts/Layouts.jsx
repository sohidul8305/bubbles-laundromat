import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



const RootLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen">
     <Navbar></Navbar>


          <main className="flex-grow">
    <Outlet />
</main>


     <Footer></Footer>
        </div>
    );
};

export default RootLayouts;
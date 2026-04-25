import { createBrowserRouter } from "react-router-dom";

// Layout
import RootLayouts from "../RootLayouts/RootLayouts";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Service from "../Pages/Service";
import Prices from "../components/Prices/Prices";
import FAQ from "../components/FAQ/FAQ";
import Contacts from "../components/Contacts/Contacts";

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "pricing", element: <Prices /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <Contacts/> },
    ],
  },
]);
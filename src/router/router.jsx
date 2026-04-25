import { createBrowserRouter } from "react-router-dom";

// Layout
import RootLayouts from "../RootLayouts/RootLayouts";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ErrorPage from "../components/ErrorPage/ErrorPage";

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
    ],
  },
]);
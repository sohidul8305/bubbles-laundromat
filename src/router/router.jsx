import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home//About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import RootLayouts from "../Rootlayouts/Layouts";

// Pages import


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [


      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);
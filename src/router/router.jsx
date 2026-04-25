import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
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
    ],
  },
]);
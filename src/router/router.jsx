import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Home/Home";
import Errorpage from "../components/Errorpage";
import Details from "../components/details";
import Brands from "../MainLayout/Navbar/Brands";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/brands",
        element:<Brands/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path: "/details/:__id",
        element: <Details />,
        loader: () => fetch("/brands.json"),
      },
    ],
  },
]);

export default router;

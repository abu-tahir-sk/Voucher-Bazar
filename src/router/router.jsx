import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Home/Home";
import Errorpage from "../components/Errorpage";
import Details from "../components/details";
import Brands from "../MainLayout/Navbar/Brands";
import About from "../components/About";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../components/MyProfile";
import SignIn from "../components/SignIn";
import SignUP from "../components/SignUP";
import PublicRoute from "./PublicRoute";



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
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        
        path: "/login",
        element: <PublicRoute><SignIn /></PublicRoute>,
      
      },
      {
        path: "/register",
        element: <SignUP />,
      },
      {
        path: "/details/:__id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch("/brands.json"),
      },
    ],
  },
]);

export default router;

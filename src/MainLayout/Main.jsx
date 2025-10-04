import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Main = () => {
      return (
            <div className="google-font ">
                  <Navbar></Navbar>
                  <Outlet></Outlet>
            </div>
      );
};

export default Main;
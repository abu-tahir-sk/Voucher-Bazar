import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "../components/AuthProvider/Footer";

const Main = () => {
      return (
            <div className="noto-sans">
                  <Navbar></Navbar>
                  <div className="min-h-[calc(100vh-284px)]">
                        <Outlet/>
                  </div>
                  <div>
                        <Footer/>
                  </div>
            </div>
      );
};

export default Main;
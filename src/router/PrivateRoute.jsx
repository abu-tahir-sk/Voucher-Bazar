import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { div } from "framer-motion/client";


const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);

  if(loading){
      return <div className="flex flex-col justify-center items-center ">
         <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;

import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  // user thakle login/register page e dhukte dibe na
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;

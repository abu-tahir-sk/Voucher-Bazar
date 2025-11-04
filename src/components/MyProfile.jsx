import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
const MyProfile = () => {
  const { user, handleLogOUt } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Cover / Banner */}
      <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <h2 className="text-white text-3xl font-bold">
          Welcome, {user?.displayName || "User"}
        </h2>
      </div>

      {/* Profile Card */}
      <div className="bg-white w-full max-w-md mt-[-40px] rounded-2xl shadow-xl p-6 text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow"
        />

        <h3 className="text-2xl font-semibold mt-3 text-gray-800">
          {user?.displayName || "No Name"}
        </h3>

        <p className="text-gray-500 mt-1">{user?.email}</p>

        <div className="mt-5 flex justify-center gap-3">
          <Link
            to="/update-profile"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Update Info
          </Link>

          <button
            onClick={handleLogOUt}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

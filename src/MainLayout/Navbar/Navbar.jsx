import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Navbar = () => {
  const { handleLogOUt, user } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-4 p-3">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-bold text-yellow-600">
            Discount PRO
          </Link>
        </div>

        <nav className="mx-auto hidden md:flex items-center gap-6">
          <NavLink to="/" className="flex items-center gap-2">
            Home
          </NavLink>
          <NavLink to="/brands" className="flex items-center gap-2">
            Brands
          </NavLink>

        {
          user &&   <NavLink to="/my-profile" className="flex items-center gap-2">
            My Profile
          </NavLink>
        }

          <NavLink to="/about" className="flex items-center gap-2">
            About Dev
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden sm:flex flex-col text-sm text-right mr-2">
                <span className="font-medium">Welcome, {user.displayName || user.email}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
              <img src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name||user.email)}`} alt="avatar" className="w-9 h-9 rounded-full object-cover"/>
              <button onClick={handleLogOUt} className="px-3 py-1 bg-gray-100 rounded">Log out</button>
            </>
          ) : (
           <> 
          <Link
            to="/login"
            className="px-3 py-1 bg-yellow-400 text-white rounded"
          >
            Login
          </Link>
           </>
          )} 
        </div>
      </div>
    </header>
  );
};

export default Navbar;

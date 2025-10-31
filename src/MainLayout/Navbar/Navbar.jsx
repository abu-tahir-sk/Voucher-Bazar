import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)

  const link = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Brands</a>
      </li>
      <li>
        <a>My Profile</a>
      </li>
      <li>
        <a>About Dev</a>
      </li>
    </>
  );
  return (
    <nav className="flex justify-between items-center px-8 bg-[#ffe8e4] h-16">
      <div>
        <h2 className="text-[24px] font-extrabold text-[#2b1c1c] inter-font">Voucher<span className="text-[#FF6D00]">BD</span></h2>
      </div>
     
       <ul className="lg:flex justify-center items-center  gap-4">
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Brands</NavLink></li>
        <li><NavLink>my-profile</NavLink></li>
        <li><NavLink>About Dev</NavLink></li>
      </ul>
    
      <div className="flex justify-center items-center gap-4">
        <button>
          {" "}
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signUp">sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

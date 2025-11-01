import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 bg-[#ffe8e4] h-16">
      <div className="flex justify-start items-center gap-2 w-full">
        <div className="text-3xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLargeFill /> : <TiThMenu />}
        </div>
        <h2 className="text-[26px] font-extrabold text-[#2b1c1c] inter-font">
          Voucher<span className="text-[#FF6D00]">BD</span>
        </h2>
      </div>

      <ul className={
        `md:flex justify-center duration-1000 items-center text-[14px] gap-4 bg-[#ffe8e4] p-3 w-full  md:h-16 absolute md:static ${menuOpen ? "top-[64px] left-0":"-top-32"}`
      }>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/brands">Brands</NavLink></li>
        <li><NavLink to="/myProfile">My Profile</NavLink></li>
        <li><NavLink to="/aboutDev">About Dev</NavLink></li>
        
       
      </ul>

      <div className="flex justify-end items-center gap-4 w-full">
        <button className="bg-[#FF6D00] btn text-white">
          {" "}
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-[#f6e4d2] btn text-[#000000] border-2 border-[#FF6D00]">
          <Link to="/signUp">sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import logo from "../../assets/image/logo.jpg"

const Navbar = () => {

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
    <div className="navbar bg-[#e0f7f4] shadow ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="h-12">
            <img className="h-full" src={logo} alt="" />
            
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#1C1C4D] text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;

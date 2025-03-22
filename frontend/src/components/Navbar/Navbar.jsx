import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = location.pathname === "/about" || 
                   location.pathname.startsWith("/about");

  return (
    <nav className="top-0 z-10 w-full">
      <div className="max-w-3xl mx-5 p-5">
        <div className="flex items-center justify-between h-16">
          <span className="bg-white rounded-full me-3">
            <img src={Logo} alt="logo" className="h-20 w-20 object-cover" />
          </span>
          {/* Desktop menu */}
          <div className="hidden md:flex text-white">
            <ul className="flex space-x-10 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* About with Dropdown */}
              <li className="relative group">
                <NavLink
                  className={() =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  About
                </NavLink>
                {/* Dropdown */}
                <ul className="absolute w-52 left-0 hidden mt-[1px] space-x-2 bg-gray-700 group-hover:block p-1 z-20">
                  <li>
                    <Link
                      to="/about"
                      className="block px-6 py-2 text-white hover:bg-yellow-600 rounded-md"
                    >
                      Project Chetna
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/our-team"
                      className="block px-4 py-2 text-white hover:bg-yellow-600 rounded-md"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/our-partners"
                      className="block px-4 py-2 text-white hover:bg-yellow-600 rounded-md"
                    >
                      Our Partners
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/programs"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/impact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  Impact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/getinvolved"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  Get Involved
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-600 transition duration-100 ease-in p-0.5"
                      : "hover:bg-yellow-600 transition duration-100 ease-in"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-white" style={{ zIndex: 30 }}>
              {!isMenuOpen && <IoMenu />}
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={variants}
            className="absolute top-0 left-0 w-full h-screen bg-black text-white p-5 md:hidden"
            style={{ zIndex: 20 }}
          >
            {/* Adjusted close button position */}
            <div className="absolute top-4 right-4">
              <button onClick={toggleMenu} className="text-2xl text-white">
                <IoMdClose />
              </button>
            </div>

            <ul className="flex flex-col text-center space-y-7 text-xl mt-20">
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/programs" onClick={toggleMenu}>
                  Programs
                </Link>
              </li>
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/impact" onClick={toggleMenu}>
                  Impact
                </Link>
              </li>
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/getinvolved" onClick={toggleMenu}>
                  Get Involved
                </Link>
              </li>
              <li className="px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 rounded-md">
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

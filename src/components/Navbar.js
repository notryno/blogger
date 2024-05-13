import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineBell,
} from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, dispatch } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate('/')
  };

  return (
    <nav
      className="flex justify-between items-center py-4 px-6 bg-gray-900  top-0 w-full z-50"
      style={{}}
    >
      <div className="flex items-center text-3xl py-2">
        <Link to="/">
          <h1 className="text-white text-3xl font-semibold mr-4 uppercase">
            Bloggit
          </h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`text-gray-300 hover:text-white ${location.pathname === "/" ? "text-yellow-400 underline" : ""
              }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`text-gray-300 hover:text-white ${location.pathname === "/blog" ? "text-yellow-400 underline" : ""
              }`}
          >
            Blog
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="flex items-center text-gray-300 cursor-pointer "
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <AiOutlineBell className="text-4xl " />
          </div>
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-100 rounded-lg shadow-lg z-50">
              <ul className="py-1">
                <li className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block">
                  Notification 1
                </li>
                <li className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block">
                  Notification 2
                </li>
                <li className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block">
                  Notification 3
                </li>
                <li className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block">
                  Clear Notifications
                </li>
              </ul>
            </div>
          )}
        </div>
        {token ? (
          <div className="relative">
            <div
              className="flex items-center text-gray-300 cursor-pointer px-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="mr-2 text-2xl ">hello</span>
              <AiOutlineUser className="text-3xl" />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-100 rounded-lg shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <Link
                      to="/profile"
                      className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-blog"
                      className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Add Blog
                    </Link>
                  </li>
                  <li
                    className="text-gray-800 hover:bg-gray-200 px-4 py-2 cursor-pointer block"
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>

            <Link to='/login'>
              <div className="text-xl text-white p-">

                <button className="bg-blue-700 rounded p-2 hover:bg-blue-600">
                  Login
                </button>
              </div>

            </Link>
          </>
        )}
      </div>
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <AiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-gray-900 w-full text-white text-center">
          <Link
            to="/"
            className={`block py-4 border-b border-gray-700 ${location.pathname === "/"
                ? "text-yellow-400"
                : "hover:text-gray-300"
              }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`block py-4 border-b border-gray-700 ${location.pathname === "/blog"
                ? "text-yellow-400"
                : "hover:text-gray-300"
              }`}
          >
            Blog
          </Link>
          {token && (
            <>
              <Link
                to="/profile"
                className="block py-4 border-b border-gray-700 hover:text-gray-300"
              >
                Profile
              </Link>
              <Link
                to="/profileblogs"
                className="block py-4 border-b border-gray-700 hover:text-gray-300"
              >
                Profile Blogs
              </Link>
              <button
                className="block py-4 border-b border-gray-700 hover:text-gray-300"
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          )}
          {!token && (
            <Link
              to="/login"
              className="block  py-4 border-b border-gray-700 hover:text-gray-300"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

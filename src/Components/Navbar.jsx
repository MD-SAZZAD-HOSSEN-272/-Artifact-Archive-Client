// import DarkMode from "./DarkMode";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import { FaMoon, FaUser } from "react-icons/fa";
import { IoClose, IoSunny } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const [menubar, setMenubar] = useState(false);
  const { user, signOutUser, setUser, DarkMode, setDarkMode } = useContext(AuthContext);
  const [profileLogo, setProfileLogo] = useState(false);
  const navigate = useNavigate()
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.warn("Logout Successfully");
        // setUser(null)
        navigate('/')
      })
      .catch((err) => {
        toast.error("there was some problem");
      });
  };

  return (
    <div className="bg-gray-500/30 backdrop-blur-2xl py-5 top-0 px-3 fixed z-10 right-0 left-0">
      <div className="flex items-center justify-between w-10/12 mx-auto ">
      <div>
        <Link to="/">
          <h2 className="text-2xl font-bold text-yellow-100 flex items-center justify-center gap-2">
            <span id="logo">🏺</span>
            <span className="hidden md:flex tracking-wide">Artifact Archive</span>
          </h2>
        </Link>
        <Tooltip anchorSelect="#logo">Artifact Archive</Tooltip>
      </div>
      <div className=" gap-4 hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
            } transition duration-300`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/all-artifacts"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
            } transition duration-300`
          }
        >
          <button className="cursor-pointer">All Artifacts</button>
        </NavLink>
        {user && (
          <div className="flex gap-4">
            <NavLink
              to="/add-artifact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                    : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                } transition duration-300`
              }
            >
              Add Artifact
            </NavLink>
            <NavLink
              to={`/artifact-by-email`}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                    : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                } transition duration-300`
              }
            >
              My Add Artifact
            </NavLink>
            <NavLink
              to="/likes"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                    : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                } transition duration-300`
              }
            >
              <button className="cursor-pointer">Liked Artifacts</button>
            </NavLink>
          </div>
        )}
      </div>
      <div className="relative flex lg:gap-5 md:gap-8 gap-3 items-center z-10 justify-center">
        <div className="flex gap-5 items-center">
          {user ? (
            <div className="flex flex-col gap-5 items-center justify-center">
              {user?.photoURL ? (
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="">
                    <img
                      id="user-name"
                      onClick={() => setProfileLogo(!profileLogo)}
                      className="w-12 h-12 rounded-full cursor-pointer"
                      src={user?.photoURL}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100/50 z-10 backdrop-blur-2xl rounded-box w-52 absolute right-10 text-center p-5 space-y-3 shadow-sm"
                  >
                    <span className="text-white text-xl rounded-2xl bg-[#3d2b1f] border border-pink-600 hover:bg-[#4a2f25] font-bold px-5 py-2">
                      {user?.displayName}
                    </span>

                    <li>
                      <NavLink
                        to={`/artifact-by-email`}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                              : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                          } transition duration-300`
                        }
                      >
                        My Add Artifact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/likes"
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                              : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                          } transition duration-300`
                        }
                      >
                        <button className="cursor-pointer">Liked Artifacts</button>
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r cursor-pointer bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-lg"
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <FaUser
                  id="user-name"
                  onClick={() => setProfileLogo(!profileLogo)}
                  className="w-12 h-12 rounded-full cursor-pointer"
                />
              )}
              <Tooltip anchorSelect="#user-name">{user?.displayName}</Tooltip>
              <button
                onClick={handleLogout}
                className={`absolute bg-white py-3 px-5 cursor-pointer rounded-xl transition-all duration-300 ease-in-out text-green-500 font-bold ${
                  profileLogo
                    ? "scale-100 top-16 opacity-100 pointer-events-auto z-10"
                    : "opacity-0 scale-75 -top-16 pointer-events-none z-10"
                }`}
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-white py-3 px-5 cursor-pointer rounded-xl text-green-500 font-bold">
                Login
              </button>
            </NavLink>
          )}
          <div onClick={() => setDarkMode(!DarkMode)} className="text-3xl">{
              DarkMode ? <IoSunny className='text-white' /> : <FaMoon />
            }</div>
        </div>
        <div onClick={() => setMenubar(!menubar)}>
          {menubar ? (
            <IoClose className="lg:hidden cursor-pointer text-3xl" />
          ) : (
            <CiMenuBurger className="lg:hidden cursor-pointer text-3xl" />
          )}
          <div
            className={`flex flex-col lg:hidden text-center duration-200 gap-4 top-20 bg-white/50 backdrop-blur-2xl p-4 rounded-xl absolute ${
              menubar ? "right-4" : "-right-96"
            }`}
          >
            <div className="flex flex-col gap-5 w-52">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                      : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                  } transition duration-300`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/all-artifacts"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                      : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                  } transition duration-300`
                }
              >
                <button className="cursor-pointer">All Artifacts</button>
              </NavLink>
              {user && (
                <div className="flex gap-4 flex-col">
                  <NavLink
                    to="/add-artifact"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                          : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                      } transition duration-300`
                    }
                  >
                    Add Artifact
                  </NavLink>
                  <NavLink
                    to={`/artifact-by-email`}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                          : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                      } transition duration-300`
                    }
                  >
                    My Add Artifact
                  </NavLink>
                  <NavLink
                    to="/likes"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                          : "bg-[#3d2b1f] text-white border border-pink-600 hover:bg-[#4a2f25] font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
                      } transition duration-300`
                    }
                  >
                    <button className="cursor-pointer">My Like Page</button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

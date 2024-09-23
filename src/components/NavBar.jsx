import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-evenly">
        {/* Icono y nombre de la empresa */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo simex" className="h-32" />
            <h1 className="text-3xl  hidden md:flex underline text-blue-800 ml-2">
              Simex Internacional
            </h1>
          </Link>
        </div>

        {/* Barra de Navegacion central */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
          <ul className="flex items-center">
            <li className="m-3">
              <NavLink
                to="/Cargas"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-semibold text-4xl underline"
                    : "text-white"
                }
              >
                Cargas
              </NavLink>
            </li>
            <li className="m-3">
              <NavLink
                to="/operaciones"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500 font-semibold text-3xl underline"
                    : "text-white"
                }
              >
                Operaciones
              </NavLink>
            </li>
            <li className="m-3">
              <NavLink
                to="/digitalizacion"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500 font-semibold text-3xl underline"
                    : "text-white"
                }
              >
                Digitalizacion
              </NavLink>
            </li>
            <li className="m-3">
              <NavLink
                to="/facturacion"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500 font-semibold text-3xl underline"
                    : "text-white"
                }
              >
                Facturacion
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menu Dispositivos pequeños */}
        <div className="flex items-center justify-between">
          <div className="md:hidden flex items-center mr-3">
            <button
              className="text-black-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars className="text-4xl" />
            </button>
            <div
              className={`${
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } lg:hidden absolute inset-0 flex flex-col bg-black opacity-80 items-center justify-center transition-transform transform origin-top-right duration-500 ease-in-out `}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ul className="flex flex-col items-center">
                <li className="p-4">
                  <NavLink
                    to="/Cargas"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold text-5xl underline"
                        : "text-gray-500 text-3xl"
                    }
                  >
                    Cargas
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink
                    to="/operaciones"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold text-3xl underline"
                        : "text-gray-500 text-3xl"
                    }
                  >
                    Operaciones
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink
                    to="/digitalizacion"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold text-3xl underline"
                        : "text-gray-500 text-3xl"
                    }
                  >
                    Digitalizacion
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink
                    to="/facturacion"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold text-3xl underline"
                        : "text-gray-500 text-3xl"
                    }
                  >
                    Facturacion
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <NavLink to="/login" className="text-black-200 text-4xl">
              <FaUserCircle />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

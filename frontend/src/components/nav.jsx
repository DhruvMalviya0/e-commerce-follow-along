import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white hover:text-gray-300 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center w-full justify-center">
                        <ul className="flex space-x-6">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/product"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    My Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/create-product"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/product"
                                end
                                className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                My Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-product"
                                end
                                className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                end
                                className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

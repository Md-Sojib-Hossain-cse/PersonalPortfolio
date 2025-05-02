"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { ModeToggle } from "../ui/mode-toggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 dark:text-white font-ubuntu"
        >
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-black dark:text-white">
            MDSOJIB<span className="text-[#4CAF50]">HOSSAIN</span>
          </h1>
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 dark:text-white"
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="#about"
            className="hover:text-emerald-500 font-medium dark:text-white"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-emerald-500 font-medium dark:text-white"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="hover:text-emerald-500 font-medium dark:text-white"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="hover:text-emerald-500 font-medium dark:text-white"
          >
            Contact
          </Link>

          {/* theme toggler */}
          <ModeToggle></ModeToggle>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="rounded-full focus:outline-none"
            ></button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-40 py-2 z-10">
                <Link
                  href="/resume.pdf"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Download Resume
                </Link>
                <Link
                  href="mailto:arifulislamofficial26@gmail.com"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Email Me
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 shadow-md">
          <Link
            href="#about"
            className="block hover:text-emerald-500 font-medium dark:text-white"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block hover:text-emerald-500 font-medium dark:text-white"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="block hover:text-emerald-500 font-medium dark:text-white"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="block hover:text-emerald-500 font-medium dark:text-white"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 mt-4 dark:text-white">
            <FaUser />
            <Link href="/resume.pdf" className="text-sm hover:underline">
              Download Resume
            </Link>
          </div>
          {/* theme toggler */}
          <ModeToggle></ModeToggle>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

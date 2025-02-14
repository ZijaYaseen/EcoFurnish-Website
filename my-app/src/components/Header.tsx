"use client";

import React, { useEffect, useState } from "react";
import { Nav, NavMbl } from "@/data";
import {
  CiHeart,
  CiUser,
  CiShoppingCart,
} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdArrowBack } from "react-icons/md"; // Back arrow icon
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { UseAppSelector } from "@/redux/hooks";

// Define the type for mobile nav items. Each item may include nested subItems.
interface MobileNavItem {
  name: string;
  link?: string;
  subItems?: MobileNavItem[];
}

const Header = (props: { bgColor: string; shadow: string }) => {
  // State to toggle mobile menu visibility
  const [NavmenuOpen, NavsetMenuOpen] = useState(false);
  // menuStack holds an array of menu levels. Initially, the root level is NavMbl.
  const [menuStack, setMenuStack] = useState<MobileNavItem[][]>([NavMbl]);

  const router = useRouter();

  // Back button handler: pop the last menu level.
  const handleBack = () => {
    if (menuStack.length > 1) {
      setMenuStack(menuStack.slice(0, menuStack.length - 1));
    } else {
      // If on root level, close the mobile menu.
      NavsetMenuOpen(false);
    }
  };

  // Handle a click on a mobile menu item.
  // For items with subItems, we expand the submenu.
  const handleMobileItemClick = (item: MobileNavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      // Push the submenu into the stack.
      setMenuStack([...menuStack, item.subItems]);
    }
    // For final links (without subItems), we let the <a> tag handle navigation.
  };

  // For desktop links or closing mobile menu on click
  const handleLinkClick = () => {
    NavsetMenuOpen(false);
  };

  // Check for stored token for login redirection.
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const handleLoginClick = () => {
    handleLinkClick();
    if (token) {
      router.push("/Dashboard");
    } else {
      router.push("/Account/Login");
    }
  };

  const cartItems = UseAppSelector((state) => state.cart.items);

  // The current menu level is the last element in the stack.
  const currentMenu = menuStack[menuStack.length - 1];

  return (
    <nav
      className={`fixed z-10 top-0 left-0 flex items-center w-full md:h-[90px] max-w-[1920px] h-[60px] ${props.shadow} ${props.bgColor}`}
    >
      {/* Desktop Logo */}
      <div className="text-black lg:px-14 font-serif px-2 hidden lg:block">
        <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block flex-1">
        <ul className="flex space-x-14 justify-center text-base font-medium font-poppins md:ml-12">
          {Nav.map((item) => (
            <Link href={item.Link} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Unified Icons for All Screens */}
      <div className="absolute flex right-5 md:static space-x-3 md:space-x-10 md:mr-10 z-50">
        <div onClick={handleLoginClick} className="cursor-pointer">
          <CiUser size={28} className="w-7 h-7 lg:w-8 lg:h-8 hidden md:block" />
        </div>
        <SearchBar />
        <a href="https://www.amazon.com/your-wishlist-page" target="_blank" rel="noopener noreferrer">
          <CiHeart size={28} className="w-7 h-7 lg:w-8 lg:h-8" />
        </a>
        <a href="https://www.amazon.com/your-cart-page" target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <CiShoppingCart
              size={28}
              className="cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
            />
            {cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </div>
            )}
          </div>
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="relative flex items-center md:hidden w-full z-40">
        <div
          className="text-2xl cursor-pointer mx-4"
          onClick={() => {
            if (!NavmenuOpen) {
              // Reset to root menu when opening.
              setMenuStack([NavMbl]);
            }
            NavsetMenuOpen(!NavmenuOpen);
          }}
        >
          <RxHamburgerMenu size={20} className="w-[22px] h-6 lg:w-8 lg:h-8" />
        </div>
        <div className="text-black lg:px-14">
          <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
        </div>
      </div>

      {/* Mobile Nested Menu */}
      {NavmenuOpen && (
        <div
          className={`absolute top-0 left-0 w-[75%] h-screen ${props.bgColor} shadow-lg md:hidden z-[100]`}
        >
          {/* Header for mobile menu with Back button (if nested) and Close icon */}
          <div className="text-black lg:px-14 font-serif flex items-center justify-between p-4 border-b border-gray-300">
            {menuStack.length > 1 ? (
              <button onClick={handleBack} className="flex items-center text-lg">
                <MdArrowBack size={20} className="mr-2" /> Back
              </button>
            ) : (
              <span className="font-semibold lg:text-2xl text-xl">Menu</span>
            )}
            <MdClose
              size={20}
              className="cursor-pointer"
              onClick={() => {
                NavsetMenuOpen(false);
                setMenuStack([NavMbl]);
              }}
            />
          </div>
          {/* Menu Items */}
<ul className="flex flex-col space-y-7 text-start p-8 max-h-[70vh] overflow-y-auto">
  {currentMenu.map((item) => (
    <li
      key={item.name}
      className="border-b-2 border-black flex items-center justify-between py-2"
    >
      {item.subItems && item.subItems.length > 0 ? (
        <>
          <span
            onClick={() => handleMobileItemClick(item)}
            className="cursor-pointer"
          >
            {item.name}
          </span>
          <MdArrowBack
            size={20}
            className="rotate-180 cursor-pointer"
            onClick={() => handleMobileItemClick(item)}
          />
        </>
      ) : (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer block w-full"
        >
          {item.name}
        </a>
      )}
    </li>
  ))}
</ul>

          {/* Bottom Account Section */}
          <div className="absolute bottom-0 bg-black w-full">
            <div onClick={handleLoginClick} className="cursor-pointer flex p-6 gap-1 pb-14">
              <CiUser size={28} className="w-6 h-6" color="white" />
              <p className="text-white">Account</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

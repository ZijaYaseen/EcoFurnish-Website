"use client";

import React, { useEffect, useState } from "react";
import { NavMbl } from "@/data";
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdArrowBack } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { MdSupervisorAccount } from "react-icons/md";
import { UseAppSelector } from "@/redux/hooks";

// NavItem interface used for both desktop and mobile
interface NavItem {
  name: string;
  link?: string;
  subItems?: NavItem[];
}

const Header = (props: { bgColor: string; shadow: string }) => {
  // Mobile menu state
  const [NavmenuOpen, NavsetMenuOpen] = useState(false);
  // Stack for mobile nested menu levels
  const [menuStack, setMenuStack] = useState<NavItem[][]>([NavMbl]);
  // For desktop mega menu: store the currently active nav item
  const [activeMegaMenu, setActiveMegaMenu] = useState<NavItem | null>(null);

  const router = useRouter();

  // Mobile Back button handler (for nested menus)
  const handleBack = () => {
    if (menuStack.length > 1) {
      setMenuStack(menuStack.slice(0, menuStack.length - 1));
    } else {
      NavsetMenuOpen(false);
    }
  };

  // When a mobile nav item with subItems is clicked
  const handleMobileItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setMenuStack([...menuStack, item.subItems]);
    }
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    NavsetMenuOpen(false);
  };

  // Check for stored token for login redirection
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
  const currentMenu = menuStack[menuStack.length - 1];

  return (
    <>
      {/* NAV BAR */}
      <nav
        className={`fixed z-10 top-0 left-0 w-screen md:h-[90px] h-[60px] ${props.shadow} ${props.bgColor} flex items-center justify-between px-4`}
      >
        {/* MOBILE: Hamburger & Logo */}
        <div className="md:hidden flex items-center">
          <div
            className="text-2xl cursor-pointer mr-4"
            onClick={() => {
              if (!NavmenuOpen) {
                setMenuStack([NavMbl]);
              }
              NavsetMenuOpen(!NavmenuOpen);
            }}
          >
            <RxHamburgerMenu size={20} className="w-[22px] h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="text-black font-serif">
            <h1 className="font-semibold text-xl">EcoFurnish</h1>
          </div>
        </div>

        {/* DESKTOP: Logo */}
        <div className="text-black lg:px-14 font-serif px-2 hidden lg:block">
          <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
        </div>

        {/* DESKTOP Navigation */}
        <div
          className="hidden md:flex flex-1 items-center justify-center"
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <ul className="flex space-x-6 uppercase tracking-wider text-sm font-medium">
            {NavMbl.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => {
                  if (item.subItems && item.subItems.length > 0) {
                    setActiveMegaMenu(item);
                  } else {
                    setActiveMegaMenu(null);
                  }
                }}
                className="relative"
              >
                {item.link ? (
                  <Link href={item.link}>
                    <span className="cursor-pointer px-3 py-2 flex items-center hover:text-blue-600">
                      {item.name}
                      {item.subItems && item.subItems.length > 0 && (
                        <MdKeyboardArrowDown size={20} className="ml-1" />
                      )}
                    </span>
                  </Link>
                ) : (
                  <span className="cursor-pointer px-3 py-2 flex items-center">
                    {item.name}
                    {item.subItems && item.subItems.length > 0 && (
                      <MdKeyboardArrowDown size={20} className="ml-1" />
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Unified Icons (Account, Search, Wishlist, Cart) */}
        <div className="absolute right-5 md:static flex space-x-3 md:space-x-10 md:mr-10 z-50">
          <div onClick={handleLoginClick} className="cursor-pointer">
            <CiUser
              size={28}
              className="w-7 h-7 lg:w-8 lg:h-8 hidden md:block"
            />
          </div>
          <SearchBar />
          <a
            href="https://www.amazon.com/your-wishlist-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiHeart size={28} className="w-7 h-7 lg:w-8 lg:h-8" />
          </a>
          <a
            href="https://www.amazon.com/your-cart-page"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </nav>

      {/* DESKTOP MEGA MENU (Full Width) */}
      {activeMegaMenu && (
        <div
          className="hidden md:block fixed left-0 top-[70px] w-screen bg-white shadow-xl border-t border-gray-200 z-50"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-[1920px] mx-auto px-14 py-10 flex gap-20">
            {activeMegaMenu.subItems?.map((subItem) => (
              <div key={subItem.name}>
                <h3 className="mb-3 uppercase text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  {subItem.name}
                </h3>
                <ul className="space-y-2">
                  {subItem.subItems && subItem.subItems.length > 0 ? (
                    subItem.subItems.map((child) => (
                      <li key={child.name}>
                        <Link href={child.link || "#"}>
                          <span className="block text-gray-600 hover:border-b hover:border-gray-600 border-b border-transparent text-sm">
                            {child.name}
                          </span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <Link href={subItem.link || "#"}>
                        <span className="block text-gray-600 hover:text-blue-600 text-sm">
                          View All
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {NavmenuOpen && (
        <div
          className={`md:hidden fixed top-0 left-0 w-[75%] h-screen ${props.bgColor} shadow-lg z-[100]`}
        >
          {/* Mobile Menu Header */}
          <div className="text-black font-serif flex items-center justify-between p-4 border-b border-gray-300">
            {menuStack.length > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center text-lg gap-1"
              >
                <MdArrowBack size={20} className="mr-2"/>
                <span className="font-semibold text-xl">Back</span>
              </button>
            ) : (
              <span className="font-semibold text-xl">Menu</span>
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
          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-4 text-start p-8 max-h-[70vh] overflow-y-auto">
            {currentMenu.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-300 flex items-center justify-between py-2"
              >
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <span
                      onClick={() => handleMobileItemClick(item)}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </span>
                    <MdKeyboardArrowDown
                      size={20}
                      className="cursor-pointer"
                      onClick={() => handleMobileItemClick(item)}
                    />
                  </>
                ) : (
                  <Link href={item.link || "#"} onClick={handleLinkClick}>
                    <span className="cursor-pointer block w-full">
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile Account Section */}
          <div className="absolute bottom-0 bg-black w-full">
          <div
  onClick={handleLoginClick}
  className="cursor-pointer flex items-center p-6 gap-2 pb-14"
>
  <MdSupervisorAccount size={30} className="text-white" />
  <p className="text-white text-center">Account</p>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;

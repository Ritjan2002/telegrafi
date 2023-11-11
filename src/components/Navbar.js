import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="bg-gray-100 shadow">
        <div className="container mx-auto md:px-32">
          <div className="flex items-center justify-between h-16">
            {/* Left section with links */}
            <div className="flex md:justify-between gap-10 w-full">
              {/* Button to open the drawer */}
              <button
                onClick={toggleDrawer}
                className=" inline-flex items-center px-2 py-1 border border-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
              >
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>

              <Link
                to="/link1"
                className="md:inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 hidden "
              >
                Të Fundit
              </Link>
              <Link
                to="/link2"
                className="md:inline-flex hidden items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 "
              >
                Konflikti izraelito-palestinez
              </Link>
              <div className="flex items-center px-2 md:px-32">
                <img
                  className="h-10 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Telegrafi_Logo_%282023%29.svg" // Replace with your logo path
                  alt="Logo"
                />
              </div>
              <Link
                to="/link3"
                className="md:inline-flex hidden items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Jobs
              </Link>
              <Link
                to="/link4"
                className="md:inline-flex hidden items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Real Estate
              </Link>
              <Link
                to="/link5"
                className="md:inline-flex hidden items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        direction="left"
        lockBackgroundScroll="true"
        className="bg-white shadow-md p-4 overflow-y-auto "
        size={450}
      >
        {/* search bar */}
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            {/* <!--Search icon--> */}
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-4 pb-4 text-base font-medium">
          <Link to="/link1" onClick={closeDrawer}>
            Ballina
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Të Fundit
          </Link>
          <Link to="/link1" onClick={closeDrawer}>
            Në Trend
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Live
          </Link>
          <Link to="/link1" onClick={closeDrawer}>
            Ukraina
          </Link>
        </div>
        <div className="flex flex-col gap-4 pb-4 text-base font-medium">
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Lajme
          </Link>
          <Link
            to="/link1"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Botë
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Ekonomi
          </Link>
          <Link
            to="/link1"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Sport
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Magazina
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Cult
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Femra
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Stili
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-gray-600 pt-4"
          >
            Shëndetësi
          </Link>
          <Link
            to="/link2"
            onClick={closeDrawer}
            className="border-t border-b border-gray-600 pt-4 pb-4"
          >
            Kuzhina
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium">
          <Link to="/link2" onClick={closeDrawer}>
            Për ne
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Na Kontaktoni
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Arkiva
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Prokurimi i hapur
          </Link>
          <Link to="/link2" onClick={closeDrawer}>
            Reklamo në Telegrafi
          </Link>
        </div>
        <p className="pt-8">Shkarkoje aplikacionin:</p>
        <div className="flex gap-4">
          <img
            src="https://telegrafi.com/wp-content/themes/telegrafi/assets/img/apple.png"
            alt=""
          />
          <img
            src="https://telegrafi.com/wp-content/themes/telegrafi/assets/img/android.png"
            alt=""
          />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;

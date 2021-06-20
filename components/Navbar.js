import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <Popover>
      {({ open }) => (
        <>
          <nav className="bg-white dark:bg-black flex justify-between px-5 py-2">
            <div className="hidden lg:block">
              <input
                type="text"
                className="mt-1 block dark:bg-black dark:text-white w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Search"
              />
            </div>
            <div className="flex">
              {/* <Popover.Button className="p-2 border-2 block md:hidden rounded border-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Popover.Button> */}
              <span className="ml-2 text-2xl dark:text-white">Aplaf</span>
            </div>
            <div className="flex space-x-3">
              {/* <a
                href="#"
                className="whitespace-nowrap text-base font-medium dark:text-white text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a> */}
              <button
                className="dark:text-white"
                onClick={(e) => {
                  if(dark){
                    document
                    .getElementsByTagName("html")
                    .item(0)
                    .classList.remove("dark");
                    setDark(false)
                  } else {
                    document
                    .getElementsByTagName("html")
                    .item(0)
                    .classList.add("dark");
                    setDark(true)
                  }
                 
                }}
              >
                {dark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex dark:text-white items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Subscribe
              </a>
            </div>
            {/* <Popover.Button className="p-2 md:hidden rounded-full focus:bg-purple-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Popover.Button> */}
          </nav>

          {/* <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
            show={open}
          >
            <Popover.Panel
              focus
              static
              className="absolute transition p-4 space-y-2 transform flex flex-col bg-white dark:bg-black top-0 bottom-0 left-0 w-5/6 h-full"
            >
              <input
                type="text"
                class="mt-1 block w-full rounded-md dark:bg-black dark:text-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Search"
              />
              <a
                href="#"
                className="block w-full dark:text-white px-4 py-2 text-center font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-gray-200"
              >
                Log in
              </a>
              <a
                href="#"
                className="whitespace-nowrap dark:text-white inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </Popover.Panel>
          </Transition> */}
        </>
      )}
    </Popover>
  );
}

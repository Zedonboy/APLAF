import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ title=undefined, children }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', {scope: './'})
      .then((reg) => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch((error) => {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }
  }, [])
  return (
    <>
      <Head>
        <link
          href="/assets/fontawesome/css/fontawesome.min.css"
          rel="stylesheet"
        />
        <link href="/assets/fontawesome/css/brands.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      {children}
      <section className="flex justify-center dark:bg-black">
      <div className="flex flex-col max-w-4xl md:h-56  rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
        <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
          <div className="py-6 px-8 md:py-0">
            <h2 className="text-gray-700 text-2xl dark:text-white font-bold md:text-gray-100">
              Sign Up For Project Updates
            </h2>
            <p className="mt-2 text-gray-600 dark:text-white md:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur obcaecati odio
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
          <form>
            <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
              <input
                className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
              <button className="py-3 px-4 bg-gray-700 dark:bg-purple-500 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      </section>
      
      <footer className="bg-white flex flex-wrap py-8 px-24 md:px-2 dark:bg-black min-h-[50vh]">
        <div className="w-full md:w-1/5 flex justify-center items-center">
          <span className="dark:text-white">Logo</span>
        </div>
        <div className="w-full mt-2 md:w-1/5 flex justify-center items-center">
          <p className="dark:text-white text-xs font-light">
            Elit laboris aliqua ex duis aliquip. Commodo enim culpa eiusmod
            adipisicing anim veniam officia excepteur labore ad nisi.
            Reprehenderit est ea consequat eiusmod consequat est eiusmod amet.
            Occaecat esse cupidatat magna aliquip deserunt officia exercitation.
            Amet culpa excepteur
          </p>
        </div>
        <div className="w-full mt-2 md:w-1/5 flex items-center md:justify-center">
          <div className="flex flex-col space-y-2">
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Home</p>
            </a>
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Archives</p>
            </a>
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Write To Us</p>
            </a>
          </div>
        </div>
        <div className="w-full mt-2 md:w-1/5 justift-center flex flex-col justify-center items-center">
          <p className="dark:text-white">Contact</p>
          <section className="flex mt-2 space-x-2">
            <a href="#">
              <i className="fab text-[#1da1f2] fa-2x fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab text-[#3b5998] fa-2x fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-2x text-[#0088cc] fa-telegram-plane"></i>
            </a>
          </section>
        </div>
      </footer>
    </>
  );
}

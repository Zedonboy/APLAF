import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
//import Cookie from "universal-cookie";
import Link from "next/link";
//import { post } from "../browserUtils/api";
//import { API_HOST } from "../config";
export default function SignUp() {
  let [regDetail, setRegDetails] = useState(null);
  let [errorMssg, setErrorMessage] = useState(null);
  let [submitting, setSubmitting] = useState(false)
  //let cookieRef = useRef(new Cookie());
  let cb = useCallback((event) => {
    let nam = event.target.name;
    let val = event.target.value;
    setRegDetails({ ...regDetail, [nam]: val });
  }, [regDetail]);

  let router = useRouter();

  return (
    <div>
      {/* component */}
      <section className="min-h-screen flex items-stretch">
        <div
          className="md:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="w-full px-24 z-10 text-white">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </span>
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </span>
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="md:w-1/2 dark:bg-black w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-navy-dark">
         
          <div className="w-full py-6 z-20">
            <h1 className="my-6">
              <Link href="/">
                <a className="logo-text">TwelfStack</a>
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-300">
                Sign Up to your account
              </h2>
            </h1>
            {errorMssg ? (
              <section className="flex justify-center items-center p-4 rounded border">
                <p className="text-red-400 text-sm">{errorMssg}</p>
              </section>
            ) : null}

            {/* <div className="py-6 space-x-2">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                f
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                G+
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                in
              </span>
            </div> */}

            <form
              action
              onSubmit={(e) => {
                setSubmitting(true)
                post(`${API_HOST}/auth/local/register`, regDetail, null).then(
                  (r) => {
                    if (r.ok) {
                      r.json().then((data) => {
                        cookieRef.current.set("jwt", data.jwt, {
                          path: "/",
                          secure: true,
                        });
                        if (router.query["redirect_to"]) {
                          router.push(router.query["redirect_to"]);
                          return;
                        }
                        router.push("/")
                      });
                      // check redirect query
                      // go to home page
                    } else {
                      r.json().then((data) => {
                        if (Array.isArray(data.message)) {
                          setErrorMessage(data.message[0].message);
                        } else setErrorMessage(data.message);
                      });
                    }
                  }
                ).finally(() => {
                  setSubmitting(false)
                });

                e.preventDefault();
              }}
              className="sm:w-2/3 w-full px-4  md:px-0 mx-auto mt-8 space-y-6"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={cb}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none dark:bg-black dark:text-gray-300 bg-navy-light rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="tel-number" className="sr-only">
                    Name
                  </label>
                  <input
                    id="tel-number"
                    name="username"
                    type="text"
                    onChange={cb}
                    autoComplete="username"
                    className="appearance-none dark:bg-black dark:text-gray-300 bg-navy-light rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={cb}
                    autoComplete="current-password"
                    required
                    className="appearance-none dark:text-gray-300 dark:bg-black rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div> */}

              <div>
                <button
                disabled={submitting}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black dark:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Sign Up
                </button>
              </div>
              <div className="text-sm dark:text-gray-300">
                Already have an account?&nbsp;&nbsp;&nbsp;
                <Link href="/signin">
                  <a className="font-medium text-purple-600 hover:text-purple-500">
                    Sign In
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

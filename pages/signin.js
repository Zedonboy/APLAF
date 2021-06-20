import React, { useCallback, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
//port { post } from "../browserUtils/api";
//import { API_HOST } from "../config";
//import Cookie from "universal-cookie"
export default function SignIn() {
  //const cookieRef = useRef(new Cookie());
  const [logindetails, setLoginDetails] = useState({});
  const [submitting, setSubmitting] = useState(false);
  let [errorMssg, setErrorMssg] = useState(null);
  const router = useRouter();
  let cb = useCallback((event) => {
    let nam = event.target.name;
    let val = event.target.value;

    setLoginDetails({ ...logindetails, [nam]: val });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="w-full flex flex-col items-center">
          <Link href="/">
            <a className="logo-text">TwelfStack</a>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            setSubmitting(true);
            post(`${API_HOST}/auth/local`, logindetails)
              .then((r) => {
                if (r.ok) {
                  r.json((data) => {
                    cookieRef.current.set("jwt", data.jwt, {
                      path: "/",
                      secure: true,
                    });

                    if (router.query["redirect_to"]) {
                      router.push(router.query["redirect_to"]);
                      return;
                    }

                    if (data.user.role.name === "Author") {
                      router.push("/dashboard");
                      return;
                    } else {
                      router.push("/");
                    }
                  });
                } else {
                  r.json((data) => {
                    if (Array.isArray(data.message)) {
                      setErrorMssg(data.message[0].message);
                    } else {
                      setErrorMssg(data.message);
                    }
                  });
                }
              })
              .finally(() => {
                setSubmitting(false);
              });
            e.preventDefault();
          }}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="identifier"
                type="email"
                onChange={cb}
                autoComplete="email"
                required
                className="appearance-none dark:bg-black rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 dark:text-white rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
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
                autoComplete="current-password"
                required
                onChange={cb}
                className="appearance-none dark:bg-black rounded-none relative block w-full px-3 py-2 border border-navy-dark placeholder-gray-500 dark:text-white rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              disabled={submitting}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black dark:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              
              Sign in
            </button>
          </div>
          <div className="text-sm dark:text-gray-300">
            New member?&nbsp;&nbsp;&nbsp;
            <Link href="/signup">
              <a className="font-medium text-purple-600 hover:text-purple-500">
                Sign Up
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

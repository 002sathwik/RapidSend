import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 border-black-200">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <div className="text-center sm:text-left">
                <div className="flex items-center">
                  <Image src="/logo.svg" alt="Logo" width={80} height={80} />

                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl ml-2 sm:ml-4">
                    <i>RapidSend!</i>
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <a href="/upload">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button" 
              >
                <span className="text-sm font-medium text-slate-950"> GetStarted </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              </a>
               <a href="/sign-in">
              <button
                className="block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                SignIn
              </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

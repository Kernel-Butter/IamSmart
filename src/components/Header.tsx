import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex whitespace-nowrap border-b border-background-light/10 dark:border-background-dark/10 bg-background-light dark:bg-background-dark/50 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3 text-gray-800 dark:text-white">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_535)">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                ResumeCraft
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Templates
              </a>
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Examples
              </a>
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                <span className="truncate">Log In</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                <span className="truncate">Create My Resume</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

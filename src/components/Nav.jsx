// import moon from "./src/images/moon-outline.svg";
function Nav() {
  return (
    <div className="shadow-sm">
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-between ">
          <p className="text-xl">Where in the world?</p>
          <div className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </span>
            <span>Dark mood</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

import { useEffect, useContext } from "react";
import { UserContext } from "../providers/UserContext";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen, toggleMenu, logIn } =
    useContext(UserContext);

  useEffect(() => {
    // When the menu is open, prevent scrolling on the body
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup function to ensure the overflow is reset when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.reload();
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };
  return (
    <header className="mb-8 md:mb-10">
      <nav className="bg-white border-gray-200 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-6 lg:py-8">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" alt="Downmap Logo" width="100" height="auto" />
          </Link>
          <div className="flex gap-0 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className=" sm:px-0 max-w-sm">
              {!logIn ? (
                <button
                  type="button"
                  onClick={signInWithGoogle}
                  className=" hidden sm:inline-flex  text-white w-full bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between"
                >
                  <svg
                    className="hidden sm:block mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google<div></div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={logOut}
                  className="hidden sm:inline-flex text-white w-full bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between"
                >
                  Sign out
                </button>
              )}
            </div>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 z-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 z-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`
           ${isMenuOpen ? "flex" : "hidden"}
           fixed inset-0 z-40 flex-col items-center justify-center w-full h-screen bg-white
           md:static md:z-auto md:flex md:flex-row md:items-center md:w-auto md:h-auto md:bg-transparent
         `}
            id="navbar-cta"
          >
            <ul className="mt-4 flex flex-col gap-8 w-full font-medium p-4 md:gap-0 md:flex-row md:p-0 md:space-x-8 rtl:space-x-reverse md:mt-0 border-gray-100 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 md:p-0 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brandGreen"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 md:p-0 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brandGreen"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="restaurants"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 md:p-0 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brandGreen"
                >
                  Restaurants
                </Link>
              </li>
              {!logIn ? (
                <li>
                  <button
                    type="button"
                    onClick={signInWithGoogle}
                    className="sm:hidden inline-flex text-white w-full bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between"
                  >
                    <svg
                      className=" mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google<div></div>
                  </button>
                </li>
              ) : (
                <button
                  type="button"
                  onClick={logOut}
                  className="sm:hidden text-white w-full bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                >
                  Sign out
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

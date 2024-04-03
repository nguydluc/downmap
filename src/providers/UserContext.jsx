import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logIn, setLogIn] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, toggleMenu, logIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

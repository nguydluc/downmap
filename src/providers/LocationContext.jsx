import { createContext, useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const LocationContext = createContext();

// eslint-disable-next-line react/prop-types
export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    // Fetch locations
    const fetchLocations = async () => {
      const locationsCol = collection(db, "locations");
      const locationsSnapshot = await getDocs(locationsCol);
      const locationsList = locationsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLocations(locationsList);
    };

    fetchLocations();
  }, []);
  return (
    <LocationContext.Provider value={{ locations }}>
      {children}
    </LocationContext.Provider>
  );
};

import { useContext } from "react";
import { LocationContext } from "../providers/LocationContext";

// eslint-disable-next-line react/prop-types
const FilterIcon = ({ url, category, setFilteredLocations }) => {
  const { locations } = useContext(LocationContext);
  const updateFilteredLocation = () => {
    // eslint-disable-next-line react/prop-types
    const newArray = locations.filter(
      // eslint-disable-next-line react/prop-types
      (location) => location.category == category.toLowerCase()
    );
    setFilteredLocations(newArray);
    category == "All" ? setFilteredLocations(locations) : null;
  };
  return (
    <div className="flip-card w-16 h-16" onClick={updateFilteredLocation}>
      {" "}
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={url}
            alt={`${category} Icon`}
            className="w-full h-full object-contain my-0"
          />
        </div>
        <div className="flip-card-back flex items-center justify-center">
          <p className="font-bold">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterIcon;

import { useState, useContext, useEffect } from "react";
import { LocationContext } from "../providers/LocationContext";

function DropdownSelection({ setFilteredLocations }) {
  const [selectedValue, setSelectedValue] = useState("");
  const { locations } = useContext(LocationContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const newArray = locations.filter(
      // eslint-disable-next-line react/prop-types
      (location) => location.category == selectedValue.toLowerCase()
    );
    setFilteredLocations(newArray);
    selectedValue == "All" ? setFilteredLocations(locations) : null;
  }, [selectedValue]);

  return (
    <div>
      <select
        className="text-white bg-brandGreen focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        <option value="All">All</option>
        <option value="Bar">Bar</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Coffee">Coffee</option>
        <option value="Steak">Steak</option>
        <option value="Sushi">Sushi</option>
      </select>
    </div>
  );
}

export default DropdownSelection;

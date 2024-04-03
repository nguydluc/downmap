import { useContext, useEffect, useState } from "react";
import FilterIcon from "./FilterIcon";
import { LocationContext } from "../providers/LocationContext";
import DropdownSelection from "./DropDown";

const Map = () => {
  const filters = ["All", "Bar", "Breakfast", "Coffee", "Steak", "Sushi"];
  const { locations } = useContext(LocationContext);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [isHoveringPopup, setIsHoveringPopup] = useState(false);

  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnterLocation = (location) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoveredLocation(location);
  };

  const handleMouseLeaveLocation = () => {
    if (!isHoveringPopup) {
      // Only start the timeout if not hovering over the popup
      setHoverTimeout(
        setTimeout(() => {
          setHoveredLocation(null);
        }, 300)
      );
    }
  };

  const handleMouseEnterPopup = () => {
    setIsHoveringPopup(true);
    if (hoverTimeout) clearTimeout(hoverTimeout); // Cancel any pending hide action
  };

  const handleMouseLeavePopup = () => {
    setIsHoveringPopup(false);
    // Start timeout to hide popup, giving time to move back to the location marker
    setHoverTimeout(
      setTimeout(() => {
        setHoveredLocation(null);
      }, 300)
    );
  };

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  return (
    <div id="map">
      <div className=" mx-auto max-w-screen-lg w-full flex items-center prose mb-8">
        <div className=" hidden sm:flex p-4 gap-8 items-center justify-end w-full">
          <h2 className="my-0">Filter</h2>
          {filters.map((filter) => (
            <FilterIcon
              key={filter}
              url={`filters/${filter}.png`}
              category={filter}
              setFilteredLocations={setFilteredLocations}
            />
          ))}
        </div>
        <div className="flex sm:hidden p-4 gap-8 items-center justify-end w-full">
          <h2 className="my-0">Filter</h2>
          <DropdownSelection setFilteredLocations={setFilteredLocations} />
        </div>
      </div>
      <div className="relative mx-auto max-w-screen-lg w-full">
        <img
          src="/map.png"
          alt="Map"
          className="w-full h-auto object-contain"
        />
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="z-10 absolute flex items-center justify-center text-white w-[12%] h-[12%] hover:scale-110 transition-all duration-20"
            style={{
              top: `${location.top}%`,
              left: `${location.left}%`,
              backgroundImage: `url('pins/${location.category}.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => handleMouseEnterLocation(location)}
            onMouseLeave={() => handleMouseLeaveLocation(location)}
          ></div>
        ))}
        {hoveredLocation && (
          <div
            className="absolute p-8 left-full top-1/2 transform -translate-y-1/2 bg-white text-black rounded-md shadow-lg z-50 cursor-pointer prose"
            style={{
              top: `${hoveredLocation.top}%`,
              left: `${hoveredLocation.left}%`,
            }}
            onMouseEnter={handleMouseEnterPopup}
            onMouseLeave={handleMouseLeavePopup}
          >
            <h4 className="text-2xl">{hoveredLocation.name}</h4>
            <p>{hoveredLocation.description}</p>
            <a
              className="text-brandGreen"
              href={`restaurants/${hoveredLocation.slug}`}
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;

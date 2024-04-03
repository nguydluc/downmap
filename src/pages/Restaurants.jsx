import { useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { LocationContext } from "../providers/LocationContext";

const Restaurants = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div className="mx-auto max-w-screen-lg w-full mb-8 prose">
      <h1 className="text-center md:text-left">Restaurant</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {locations.map((location) => (
          <RestaurantCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

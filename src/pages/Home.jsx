import { useContext } from "react";
import Map from "../components/Map";
import { LocationContext } from "../providers/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);

  console.log(locations);
  return (
    <>
      {" "}
      <section className="mb-8 mx-auto w-full max-w-screen-lg p-4 py-12 lg:py-8 prose grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h1>
            Discover the Best Dining and Networking Spots in Downtown Calgary
          </h1>
          <p>
            Downtown Calgary has become quite the hub for corporate
            professionals, especially in the downtown commercial area and with
            the Calgary weather sometimes lunch options are limited. This map
            offers a variety of different locations for whatever the event;
            whether it’s meeting a client, networking with other professionals
            or just looking for something to eat, all these locations are a
            short distance from the Plus 15 Network.
          </p>
          <a
            href="/#map"
            className="mt-4 no-underline text-white bg-brandRed hover:bg-brandRedHover focus:ring-4 focus:outline-none focus:ring-brandRed font-medium rounded-xl text-md px-4 py-2 text-center"
          >
            Check it out
          </a>
        </div>
        <div>
          <img
            className="w-[50%] sm:w-[60%] lg:w-[80%] h-auto mx-auto"
            src="hero.png"
            alt="An illustration of two lady enjoying their drink"
          />
        </div>
      </section>
      <Map />
    </>
  );
};

export default Home;

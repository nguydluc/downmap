import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleCheckItOutClick = () => {
    // Navigate home
    navigate("/");
    // Wait for the page to load, then scroll to the map element
    setTimeout(() => {
      const mapSection = document.getElementById("map");
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // You might need to adjust the timeout depending on your app's behavior
  };
  return (
    <section className="mx-auto w-full max-w-screen-lg p-4 py-12 lg:py-8 prose grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
      <div>
        <h1>About Downmap</h1>
        <p>
          DownMap is a Calgary-based company tasked with creating a detailed
          interactive map of local eateries in the Downtown Commerical area of
          Calgary. Appealing to the corporate professionals of Calgary, DownMap
          makes use of the Plus 15 Network to create a map that offers a variety
          of restaurants for any business event such as client meetings or large
          office parties.
        </p>
        <button
          onClick={handleCheckItOutClick}
          className="mt-4 text-white bg-brandRed hover:bg-brandRedHover focus:ring-4 focus:outline-none focus:ring-brandRed font-medium rounded-xl text-md px-4 py-2 text-center"
        >
          Check it out
        </button>
      </div>
      <div>
        <img
          className="w-[60%] h-auto mx-auto"
          src="hero-about.png"
          alt="An illustration of a person drinking coffee while walking"
        />
      </div>
    </section>
  );
};

export default About;

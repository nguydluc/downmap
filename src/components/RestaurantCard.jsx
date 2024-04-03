import { Link } from "react-router-dom";

const RestaurantCard = ({ location }) => {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow mx-auto md:mx-0 m-0">
      <a href={`/restaurants/${location.slug}`}>
        <img
          className="rounded-t-lg m-0"
          src={`/n1/${location.slug}.png`}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={`/restaurants/${location.slug}`}>
          <h5 className="mb-2 no-underline text-2xl font-bold tracking-tight text-gray-900">
            {location.name}
          </h5>
        </a>
        <p className="mb-3 no-underline font-normal text-gray-700 overflow-hidden overflow-ellipsis line-clamp-2">
          {location.description}
        </p>
        <a
          href={`/restaurants/${location.slug}`}
          className="inline-flex no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-brandGreen rounded-lg hover:bg-brandGreen focus:ring-4 focus:outline-none focus:ring-brandGreen"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default RestaurantCard;

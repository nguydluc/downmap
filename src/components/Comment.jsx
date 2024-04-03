import { auth } from "../config/firebase";
// eslint-disable-next-line react/prop-types
const Comment = ({ comment }) => {
  console.log(comment);
  const timestamp = new Date(comment.timestamp.seconds * 1000);
  const formattedDate = timestamp.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <div className="flex gap-2 items-center mb-4">
        {/* Replace with dynamic data if available */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>

        <div className="font-medium">
          {/* Replace with dynamic data. For now, using placeholder text. */}
          <p>
            Anonymous User
            <time
              dateTime={formattedDate}
              className="block text-sm text-gray-500"
            >
              Reviewed on {formattedDate}
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        {/* Correctly generate stars based on the rating */}
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-4 text-brandYellow h-4 ${
              index < comment.rating ? "text-yellow-300" : "text-gray-300"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <p className="mb-2 text-gray-500">{comment.review}</p>
      {/* Add more details or elements as needed */}
    </article>
  );
};

export default Comment;

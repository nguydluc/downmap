import { useState } from "react";
import StarRating from "./StarRating";
import { db, googleProvider } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const ReviewForm = ({ restaurantId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");

  const user = auth.currentUser;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) return;

    if (rating <= 0) {
      setValidationMessage("Please select a star rating for your review."); // Inform the user
      return; // Prevent form submission
    }

    try {
      await addDoc(collection(db, "reviews"), {
        restaurant: restaurantId,
        user: user.uid,
        review: review,
        timestamp: serverTimestamp(),
        rating: rating,
      });
      setRating(0);
      setReview("");
      setValidationMessage("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.reload();
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return user ? (
    <div>
      <form className="max-w-sm" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="my-4">Leave a review</h2>
        <StarRating rating={rating} setRating={setRating} />
        <textarea
          onChange={(e) => setReview(e.target.value)}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-brandGreen focus:border-brandGreen"
          placeholder="Leave a comment..."
          required
        ></textarea>
        {validationMessage && (
          <p className="text-brandRed">{validationMessage}</p>
        )}

        <button
          type="submit"
          className="mt-8 text-white bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send review
        </button>
      </form>
    </div>
  ) : (
    <div>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="inline-flex  text-white w-full bg-brandGreen hover:bg-brandGreen/90 focus:ring-4 focus:outline-none focus:ring-brandGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in using your Google account to leave a review.<div></div>
      </button>
    </div>
  );
};

export default ReviewForm;

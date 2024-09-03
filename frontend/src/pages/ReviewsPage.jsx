import React, { useState } from "react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Anna M.",
      rating: 5,
      comment: "Excellent food and service!",
    },
    {
      id: 2,
      author: "Marco L.",
      rating: 4,
      comment: "Great atmosphere, slightly slow service.",
    },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{review.author}</span>
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;

import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = ({ review, onNext, onPrev, onSurprise }) => {
  if (!review) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="relative bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto text-center space-y-4">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-16">
        {/* Name */}
        <p className="text-xl font-bold text-gray-900">{review.name}</p>

        {/* Job */}
        <p className="text-sm text-purple-500 font-semibold mt-1 uppercase tracking-wide">{review.job}</p>

        {/* Quote Icons + Review */}
        <div className="flex justify-center mt-6">
          <FaQuoteLeft className="text-purple-400 text-2xl" />
        </div>

        <p className="text-gray-600 mt-4 px-8 text-base leading-relaxed">
          {review.text}
        </p>

        <div className="flex justify-center mt-4">
          <FaQuoteRight className="text-purple-400 text-2xl" />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onPrev}
            className="text-purple-500 hover:text-purple-700 text-2xl transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={onNext}
            className="text-purple-500 hover:text-purple-700 text-2xl transition"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Surprise Button */}
        <div className="mt-6">
          <button
            onClick={onSurprise}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md transition"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";

const Testimonial = ({ review, onNext, onPrev, onSurprise }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-16">
        <span className="border-b-4 border-purple-500">Our Testimonials</span>
      </h2>
      <Card review={review} onNext={onNext} onPrev={onPrev} onSurprise={onSurprise} />
    </div>
  );
};

export default Testimonial;

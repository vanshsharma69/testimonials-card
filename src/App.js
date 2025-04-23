import React, { useState } from "react";
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNext = () => {
    if (currentReviewIndex < reviews.length - 1) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
  };

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentReviewIndex(randomIndex);
  };

  return (
    <div className="App bg-gradient-to-r from-yellow-400 to-red-600 min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-8">
        <Testimonial
          review={reviews[currentReviewIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
          onSurprise={handleSurpriseMe}
        />
      </div>
    </div>
  );
}

export default App;

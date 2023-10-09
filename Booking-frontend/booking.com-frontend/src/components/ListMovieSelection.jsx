import React, { useState } from "react";

const ListMovieSelection = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.createRef();

  const handleNext = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = containerRef.current.scrollWidth;
    const maxScrollPosition = scrollWidth - containerWidth;

    setScrollPosition((prevPosition) =>
      prevPosition < maxScrollPosition
        ? prevPosition + containerWidth
        : prevPosition
    );
  };

  const handlePrevious = () => {
    const containerWidth = containerRef.current.offsetWidth;
    setScrollPosition((prevPosition) =>
      prevPosition > 0 ? prevPosition - containerWidth : prevPosition
    );
  };

  return (
    <div className="flex items-center">
      <button className="mr-2" onClick={handlePrevious}>
        Previous
      </button>
      <div
        className="flex overflow-x-auto"
        ref={containerRef}
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-64 h-80 object-cover mr-2 scroll-snap-align-start"
            src={image}
            alt={`Image ${index}`}
            style={{ scrollSnapAlign: "center" }}
          />
        ))}
      </div>
      <button className="ml-2" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ListMovieSelection;

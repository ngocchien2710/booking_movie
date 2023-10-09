import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
const topHeaderImg =
  "https://advserver.cgv.vn/www/images/f6ae5346a61b79f49d2da7535b8a07e1.jpg";

const Header = () => {
  const [language, setLanguage] = useState("EN");

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const containerRef = useRef(null);
  const [circleWidth, setCircleWidth] = useState(3); // Set the width of each circle in pixels
  const [renderedCircles, setRenderedCircles] = useState([]);
  const [circleMargin, setCircleMargin] = useState(10); // Set the margin between circles in pixels

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;

    const circleCount = Math.floor(
      containerWidth / (circleWidth + circleMargin)
    );
    const circles = [];

    for (let i = 0; i < circleCount; i++) {
      const circleStyle = {
        width: `${circleWidth}px`,
        height: `${circleWidth}px`,
        backgroundColor: "white",
        borderRadius: "50%",
        marginRight: `${circleMargin}px`,
        // transform: "translateY(-50%)",
      };

      circles.push(<div key={i} style={circleStyle}></div>);
    }

    // Render the circles
    setRenderedCircles(circles);
  }, [circleWidth]);
  return (
    <div className="w-full flex flex-col h-auto justify-start items-center   ">
      <img
        src={topHeaderImg}
        alt="Description of the image"
        className="w-[50%] h-[80px]"
      />
      <div className="flex flex-row w-[50%] mt-2 justify-end">
        <div className="mr-5  cursor-pointer focus:outline-none focus:bg-blue-700">
          TIN MOI NHAT & UU DAI
        </div>
        <div className="mr-5  cursor-pointer focus:outline-none focus:bg-blue-700">
          VE CUA TOI
        </div>
        <div className="mr-[20px]  cursor-pointer focus:outline-none focus:bg-blue-700">
          DANG NHAP/DANG KY
        </div>
        <div>
          <button
            className={`px-4 py-0 rounded ${
              language === "VI" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => changeLanguage("VI")}
          >
            VI
          </button>
          <button
            className={`px-4 py-0 rounded ${
              language === "EN" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => changeLanguage("EN")}
          >
            EN
          </button>
        </div>
      </div>

      <div className="w-full bg-red-500 flex flex-col justify-center items-center h-3 mt-4 ">
        <div
          ref={containerRef}
          className="w-full h-full flex justify-between items-center"
        >
          {/* Rendered circles */}
          {renderedCircles}
        </div>
      </div>
      {/* <Navigation /> */}
      <div className="relative  w-full h-[120px] bg-[#FDF7DD]  items-center justify-center">
        <div className="absolute w-full top-1 h-[120px] ">
          <div className="w-full flex flex-col h-[120px]  justify-between items-center ">
            <div className="w-full flex flex-col h-[2px] bg-transparent "></div>
            <div className="w-full flex flex-col h-[1.25px] bg-gray-500 "></div>
            <div className="w-full flex flex-col h-[1px] bg-gray-500 "></div>
            <div className="w-full flex flex-col h-[1.25px] bg-gray-500 "></div>
            <div className="w-full flex flex-col h-[2px] bg-transparent"></div>
          </div>
          {/* <div className="relative">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500"></div>
          <div className="relative z-10 mx-auto max-w-2xl p-8 bg-white shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">Content</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
          </div>
        </div> */}
        </div>
        <div className="absolute z-10 mt-5 font-bold text-xl w-full h-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Navigation />
        </div>
      </div>

      <div className="w-full bg-red-500 flex flex-col justify-center items-center h-3 mt-[0px] ">
        <div
          ref={containerRef}
          className="w-full h-full flex justify-between items-center"
        >
          {/* Rendered circles */}
          {renderedCircles}
        </div>
      </div>
    </div>
  );
};

export default Header;

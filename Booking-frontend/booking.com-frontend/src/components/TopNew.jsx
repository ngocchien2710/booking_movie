import React, { useEffect, useRef, useState } from "react";

const TopNew = () => {
  const containerRef = useRef(null);
  const [circleWidth, setCircleWidth] = useState(30);
  const [circleWidth2, setCircleWidth2] = useState(15); // Set the width of each circle in pixels
  const [renderedCircles, setRenderedCircles] = useState([]);
  const [renderedCircles2, setRenderedCircles2] = useState([]);
  const [circleMargin, setCircleMargin] = useState(2); // Set the margin between circles in pixels
  const [circleHeight, setCircleHeight] = useState(12);
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;

    const circleCount = Math.floor(
      containerWidth / (circleWidth + circleMargin)
    );
    const circles = [];

    for (let i = 0; i < circleCount; i++) {
      const circleStyle = {
        width: `${circleWidth}px`,
        height: `${circleHeight}px`,
        backgroundColor: "#D27630",
        borderRadius: "2px",
        marginRight: `${circleMargin}px`,
        // transform: "translateY(-50%)",
      };

      circles.push(<div key={i} style={circleStyle}></div>);
    }

    // Render the circles
    setRenderedCircles(circles);
  }, [circleWidth]);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;

    const circleCount = Math.floor(
      containerWidth / (circleWidth + circleMargin)
    );
    const circles = [];

    for (let i = 0; i < circleCount; i++) {
      let w = circleWidth2;
      if (i === 0 || i === circleCount - 1) {
        w = circleWidth2;
      } else {
        w = circleWidth;
      }
      const circleStyle = {
        width: `${w}px`,
        height: `${circleHeight}px`,
        backgroundColor: "#A55227",
        borderRadius: "2px",
        marginRight: `${circleMargin}px`,
        // transform: "translateY(-50%)",
      };

      circles.push(<div key={i} style={circleStyle}></div>);
    }

    // Render the circles
    setRenderedCircles2(circles);
  }, []);
  return (
    <div className="flex w-full h-[600px]">
      <div className="relative  w-full h-auto bg-[#FDF7DD]  items-center justify-center">
        <div className="absolute w-full top-1 h-auto ">
          <div className="w-full bg-[#F3DDD1] flex flex-col h-auto justify-start items-center mt-[10px]  ">
            <div className="w-full h-8 bg-[#D8C3A1]"></div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5  ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5  ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full h-8 bg-[#D8C3A1]"></div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5  ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles}
              </div>
            </div>
            <div className="w-full  flex flex-col justify-center items-center h-3 mt-0.5 ">
              <div
                ref={containerRef}
                className="w-full h-full flex justify-between items-center"
              >
                {/* Rendered circles */}
                {renderedCircles2}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  bg-[url('https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_104.png')] bg-cover bg-center z-10  border-yellow-500 border-2 font-bold text-xl w-[60%] h-[500px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default TopNew;

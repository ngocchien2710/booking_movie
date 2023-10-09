import React from "react";

const Cell = ({ width, height }) => {
  const containerStyles = `w-${width} h-${height} border-l border-[#B17058] bg-[#97533A] `;
  return <div className={containerStyles}></div>;
};

export default Cell;

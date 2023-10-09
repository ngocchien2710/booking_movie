import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import TopNew from "../components/TopNew";
import MovieSelection from "../components/MovieSelection";

const Home = () => {
  return (
    <div className="w-full flex flex-col   h-auto ">
      <Header />
      <Features />
      <TopNew />
      <MovieSelection />
    </div>
  );
};

export default Home;

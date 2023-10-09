import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <Header />
      <Features />
    </div>
  );
};

export default Home;

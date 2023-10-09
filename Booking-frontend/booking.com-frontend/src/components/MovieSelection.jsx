import React from "react";
import ListMovieSelection from "./ListMovieSelection";

const MovieSelection = () => {
  const images = [
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/7/0/700x1000-godless_15_.jpg",
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/h/_/h_a_qu_-_payoff_poster_-_d_ki_n_kh_i_chi_u_22.09.2023_1_.jpg",
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_honeysweet_teaser-poster-social.jpg",
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/l/i/live_-_main_-_ngoc_phuoc.jpg",
    // Add more image URLs here
  ];
  return (
    <div className="w-full h-auto flex flex-col  justify-center">
      <div className="w-full h-[100px] flex justify-center">
        <div className="w-[60%] flex flex-row justify-between items-center">
          <div className="w-[30%] flex-col flex">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full h-0.5 bg-black mt-1"></div>
          </div>
          <div className="text-5xl font-bold">MOVIE SELECTION</div>
          <div className="w-[30%] flex-col flex">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full h-0.5 bg-black mt-1"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex justify-center">
        <ListMovieSelection images={images} />
      </div>
    </div>
  );
};

export default MovieSelection;


import React from 'react';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/rMsvdnm/Rectangle-4287.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <input
            className="w-full md:w-[70%] max-w-[470px] h-9 p-3 md:p-4 rounded mb-3 md:mb-0"
            type="search"
            name=""
            id=""
          />
          <button className="btn btn-error">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

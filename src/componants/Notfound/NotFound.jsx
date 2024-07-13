import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col justify-center items-center">
      <div className="text-center text-white py-24">
        <div className="flex items-center justify-center mb-10">
          <div className="relative flex items-center">
            <div className="line bg-white left-6 top-1/2 absolute h-1 w-12"></div>
            <i className="fas fa-star text-4xl text-white mx-4"></i>
            <div className="line bg-white right-6 top-1/2 absolute h-1 w-12"></div>
          </div>
        </div>
        <h2 className="font-serif font-bold text-6xl mb-6">
          Page Not Found
          <br />
          <span className="text-3xl">Error 404</span>
        </h2>
        <div className="flex items-center justify-center mt-10">
          <div className="relative flex items-center">
            <div className="line bg-white left-6 top-1/2 absolute h-1 w-12"></div>
            <i className="fas fa-star text-4xl text-white mx-4"></i>
            <div className="line bg-white right-6 top-1/2 absolute h-1 w-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

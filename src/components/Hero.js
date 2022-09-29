import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[600px] relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full
         text-[#fff] max-h-[600px]
         bg-black/40 flex flex-col justify-center"
        >
          <h1 className="px-4 text-4xl sm:text-6xl lg:text-7xl font-bold">
            Best <span className="text-[#f2440a]">Foods</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-6xl text-[#f2440a] lg:text-7xl font-bold">
            Fastest <span className="text-[#fff]">Delivery</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[600px] object-cover"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;

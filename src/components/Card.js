import React from "react";

const Card = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="relative rounded-xl " style={{ overflow: "hidden" }}>
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 text-[#fff]">
          <p className="font-bold text-2xl px-2 pt-4 mb-1">A Twist of Green</p>
          <p className="px-2">Healthy 7:00</p>
          <button className="border-none bg-[#fff] text-[#333] mx-2 absolute bottom-7">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1650px] md:max-h-[200px]  lg:max-h-[300px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1567030311704-596a1fdb4d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="green salad "
        />
      </div>
      {/* Card */}
      <div className="relative rounded-xl " style={{ overflow: "hidden" }}>
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 text-[#fff]">
          <p className="font-bold text-2xl px-2 pt-4 mb-1">Restaurants</p>
          <p className="px-2">Counting 100++</p>
          <button className="border-none bg-[#fff] text-[#333] mx-2 absolute bottom-7">
            Check Out!
          </button>
        </div>
        <img
          className="max-h-[1650px] md:max-h-[200px]  lg:max-h-[300px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2814829/pexels-photo-2814829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green salad "
        />
      </div>
      {/* Card */}
      <div className="relative rounded-xl " style={{ overflow: "hidden" }}>
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 text-[#fff]">
          <p className="font-bold text-2xl px-2 pt-4 mb-1">Try Desserts Too</p>
          <p className="px-2">Tasty Treat 😊</p>
          <button className="border-none bg-[#fff] text-[#333] mx-2 absolute bottom-7">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1650px] md:max-h-[200px] lg:max-h-[300px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green salad "
        />
      </div>
    </div>
  );
};

export default Card;

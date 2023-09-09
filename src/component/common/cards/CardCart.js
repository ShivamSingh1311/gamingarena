import React from "react";

const CardCart = () => {
  return (
    <div className="w-[608px] h-[100px] rounded-[8px] bg-[#DAC0A3] border-[#e9b273] border-2 shrink-0 mt-8 items-center ">
      <div className="flex">
        <img
          src="/assets/img1.jpg"
          alt="N/A"
          className="w-[80px] h-[82.286px] shrink-0 rounded-[12px]  mt-2 ml-3"
        />
        <div>
          <p className="ml-4 text-2xl mt-2 ">title</p>
          <p className="ml-4 mt-2 ">description</p>
        </div>
        <p className="ml-[240px] text-2xl mt-7">price</p>
        <p className="ml-8 text-xl mt-8">Remove</p>
      </div>
    </div>
  );
};

export default CardCart;

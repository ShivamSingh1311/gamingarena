import { Button } from "@mui/material";
import React from "react";

const CardCart = ({ imageUrl, title, description, cost, onRemove }) => {
  return (
    <div className="w-[608px] h-[100px] rounded-[8px] bg-[#DAC0A3] border-[#e9b273] border-2 shrink-0 mt-8 items-center ">
      <div className="flex">
        <img
          src={imageUrl}
          alt="N/A"
          className="w-[80px] h-[82.286px] shrink-0 rounded-[12px]  mt-2 ml-3"
        />
        <div className="w-[300px] h-[80px] ">
          <p className="ml-4 text-xl mt-2 ">{title}</p>
          <p className="ml-4 mt-2 ">{description}</p>
        </div>
        <div className=" ml-6 text-xl mt-8 ">
          <p>Rs.{cost}</p>
        </div>
        <div className="ml-6 text-xl mt-8 ">
          <Button onClick={onRemove}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

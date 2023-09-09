import React from "react";
import CardCart from "../component/common/cards/CardCart";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div className="flex">
      <div className="pl-36 pt-24  h-screen ">
        <p className="text-2xl">Shopping Cart</p>
        <br />
        <hr className="h-[2px] bg-slate-500"></hr>
        <div className=" ">
          <CardCart />
          <CardCart />
        </div>
      </div>
      <div className="ml-[180px] mt-[150px] w-[380px] h-[400px] rounded-[12px] bg-[#DAC0A3] ">
        <div className="flex mt-7 ml-8 text-xl text-right">
          <p> Total Items :</p>
          <p className="ml-[120px]">Items</p>
        </div>
        <div className="flex mt-7 ml-8 text-xl">
          <p> SubTotal :</p>
          <p className="ml-[140px]">Items</p>
        </div>
        <div className="flex mt-7 ml-8 text-xl">
          <p> Platform Charges :</p>
          <p className="ml-[63px]">Items</p>
        </div>
        <hr className="mt-4 h-0 border border-dashed border-[#6c5020]"></hr>
        <div className="flex mt-4 ml-8 text-xl">
          <p> Grand Total :</p>
          <p className="ml-[115px]">Items</p>
        </div>
        <div className="flex mt-[80px] ml-10  text-xl">
          <button
            type="button"
            class="h-[50px] w-[300px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

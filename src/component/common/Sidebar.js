import React from "react";

const Sidebar = () => {
  return (
    <div className="inline-flex flex-col gap-8  bg-[#071952] fixed h-full p-5  text-white py-5 mt-14">
      <ol className="">
        <li className="font-medium ">Category</li>
      </ol>
      <ol className="  flex flex-col gap-5 ">
        <li className="">Action</li>
        <li className="">Arcade</li>
        <li className="">Adventure</li>
        <li className="">FPS</li>
        <li className="">RPG</li>
        <li className="">Strategy</li>
        <li className="">Battle</li>
        <li className="">Family</li>
        <li className="">Sports</li>
        <li className="">Racing</li>
        <li className="">Educational</li>
      </ol>
    </div>
  );
};

export default Sidebar;

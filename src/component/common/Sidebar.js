import React from "react";

const Sidebar = () => {
  return (
    <div className="inline-flex flex-col  bg-[#149BFC] fixed h-full text-white py-5">
      <ol className=" h-full justify-normal p-4">
        <li className="font-medium mb-10">Category</li>
        <li className="mb-6">Action</li>
        <li className="mb-6">Arcade</li>
        <li className="mb-6">Adventure</li>
        <li className="mb-6">FPS</li>
        <li className="mb-6">RPG</li>
        <li className="mb-6">Strategy</li>
        <li className="mb-6">Battle</li>
        <li className="mb-6">Family</li>
        <li className="mb-6">Sports</li>
        <li className="mb-6">Racing</li>
        <li className="mb-6">Educational</li>
      </ol>
    </div>
  );
};

export default Sidebar;

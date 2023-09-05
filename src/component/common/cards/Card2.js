import React from "react";

const Card2 = ({ imageUrl, title, description, about }) => {
  return (
    <div className="flex">
      {/* Left side (50%): Image */}
      <div className="w-1/2 rounded-lg object-contain">
        <img src={imageUrl} alt="N/A" />
        <p className="text-center font-semibold">{title}</p>
      </div>

      {/* Right side (50%): Description and About */}
      <div className="w-1/2 p-4">
        <p>{description}</p>
        <div className="mt-4">{about}</div>
      </div>
    </div>
  );
};

export default Card2;

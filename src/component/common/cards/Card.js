import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="rounded-lg bg-[#071952] text-white flex flex-col justify-center gap-5 p-2">
      <div className="rounded-lg object-contain">
        <img src={imageUrl} alt="N/A" />
      </div>
      <div>
        <p className="text-center font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

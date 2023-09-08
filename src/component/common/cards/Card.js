import React from "react";

const Card = ({ imageUrl, title, description, about, cost }) => {
  return (
    <div className="">
      <div className="rounded-lg object-contain">
        <img src={imageUrl} alt="N/A" />
      </div>
      <div>
        <p className="text-center font-semibold">{title}</p>
        <p>{description}</p>
        <p>Rs.{cost}</p>
      </div>
      <div className="">{about}</div>
    </div>
  );
};

export default Card;

import React from "react";

const Card = (props) => {
  const { imageUrl, title, description } = props;
  console.log(props);
  return (
    <div className="p-36">
      <div>
        <img src={imageUrl} alt="N/A" />
      </div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;

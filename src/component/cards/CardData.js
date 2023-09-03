import React from "react";
import Card from "../common/Card";

const CardData = () => {
  const CardData = [
    {
      imageUrl: "./assets/img1.webp",
      title: "Game1",
      description: "Game1 description",
    },
    {
      imageUrl: "./assets/img2.webp",
      title: "Game2",
      description: "Game2 description",
    },
    {
      imageUrl: "./assets/img3.webp",
      title: "Game3",
      description: "Game3 description",
    },
    {
      imageUrl: "./assets/img4.webp",
      title: "Game1",
      description: "Game1 description",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-7 pl-36 pt-24 pr-4  ">
      {CardData.map((card, index) => (
        <div className="transform transition-transform hover:scale-105 cursor-pointer">
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardData;

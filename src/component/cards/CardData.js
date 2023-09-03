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
    <div className="grid grid-cols-3 gap-7 ml-36 mt-24 mr-4 ">
      {CardData.map((card, index) => (
        <div>
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

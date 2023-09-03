import React from "react";
import Card from "../common/Card";

const CardData = () => {
  const CardData = [
    {
      imageUrl: "./assets/img1.webp",
      title: "Game1",
      description: "Game1 description",
    },
    // {
    //   imageUrl: "url_to_image2",
    //   title: "Game2",
    //   description: "Game2 description",
    // },
    // {
    //   imageUrl: "url_to_image3",
    //   title: "Game3",
    //   description: "Game3 description",
    // },
    // {
    //   imageUrl: "url_to_image1",
    //   title: "Game1",
    //   description: "Game1 description",
    // },
  ];
  return (
    <div className="flex">
      {CardData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardData;

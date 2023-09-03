import React from "react";
import Card from "../component/common/cards/Card";
import { CardData } from "../utils/constants";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-7 pl-36 pt-24 pr-4 overflow-y-hidden  ">
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

export default Home;

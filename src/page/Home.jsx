import React from "react";
import Card from "../component/common/cards/Card";
import { CardData } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (gameId) => {
    navigate(`/Game/${gameId}`);
    // Navigate to the "Game" page with the game ID as a parameter
  };
  return (
    <div className="grid grid-cols-3 gap-7 pl-36 pt-24 pr-4 overflow-y-hidden  ">
      {CardData.map((card, index) => (
        <div
          className="transform transition-transform hover:scale-105 cursor-pointer"
          onClick={() => handleClick(card.gameId)}
        >
          <Card
            key={card.gameId}
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

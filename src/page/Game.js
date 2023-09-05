import React from "react";
import { CardData } from "../utils/constants";
import Card from "../component/common/cards/Card";
import { useParams } from "react-router-dom";
const Game = (props) => {
  const { gameID } = useParams();
  const card = CardData.find((card) => card.gameId === gameID);
  if (!card) {
    return <div>Card Not found</div>;
  }
  console.log(card);
  return (
    <div className="pl-36 pt-24 pr-4 overflow-y-hidden ">
      <Card
        key={card.gameId}
        imageUrl={card.imageUrl}
        title={card.title}
        description={card.description}
      />
    </div>
  );
};

export default Game;

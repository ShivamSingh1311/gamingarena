import React from "react";
import { CardData } from "../utils/constants";
import { useParams } from "react-router-dom";
import Card2 from "../component/common/cards/Card2";
const Game = (props) => {
  const { gameID } = useParams();
  const card = CardData.find((card) => card.gameId === gameID);
  if (!card) {
    return <div>Card Not found</div>;
  }
  console.log(card);
  return (
    <div className="pl-36 pt-24 pr-4 h-screen">
      <div className="">
        <Card2
          key={card.gameId}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          about={card.about}
          cost={card.cost}
        />
      </div>
    </div>
  );
};

export default Game;

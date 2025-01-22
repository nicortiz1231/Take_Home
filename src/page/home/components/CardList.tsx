import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Card from "../../../components/Card/Card";
import "../../../styles/pages/Home.cardList.css";

const CardList: React.FC = () => {
  //Get data from the store
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <div className={"card-list"}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;

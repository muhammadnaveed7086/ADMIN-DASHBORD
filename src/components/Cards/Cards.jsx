import React from "react";
import { CardsData } from "../../Data/Data";
import "./Cards.css";
import Card from "../Card/Card";
function Cards() {
  return (
    <div className="Cards" style={{transition:'all 400ms ease'}}>
      {CardsData.map((card, id) => {
        return (
          <div className="parentCard">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

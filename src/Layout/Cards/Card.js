import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Card({ deck }) {
  const [cardDisplay, setCardDisplay] = useState(true);
  const [index, setIndex] = useState(0);
  const history = useHistory();

  const handleNext = () => {
    if (index !== deck.cards.length - 1) {
      setIndex(index + 1);
      setCardDisplay(true);
    } else {
      const result = window.confirm(
        "Restart cards? Click cancel to return to the home page."
      );
      if (result) {
        setIndex(0);
        setCardDisplay(true);
      } else {
        history.push("/");
      }
    }
  };
  const handleFlip = () => {
    setCardDisplay(!cardDisplay);
  };
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4 className="study-card-length">
              Card {index + 1} of {deck?.cards?.length}
            </h4>
            <span className="card-buttons d-flex justify-content-between">
              <p className="card-text my-1">
                {cardDisplay
                  ? deck?.cards[index].front
                  : deck?.cards[index].back}
              </p>
            </span>
            <button
              className="btn btn-secondary my-2 mr-2"
              onClick={handleFlip}
            >
              Flip
            </button>
            {!cardDisplay && (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

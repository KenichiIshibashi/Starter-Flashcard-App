import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";

function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await readDeck(deckId);
      setDeck(response);
    };
    fetchDeck();
  }, [deckId]);

  const handleDeleteDeck = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this deck?"
    );
    if (confirmDelete) {
      await deleteDeck(deckId);
      history.push("/");
    }
  };

  const handleDeleteCard = async (cardId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this card?"
    );
    if (confirmDelete) {
      await deleteCard(cardId);
      setDeck((prevDeck) => ({
        ...prevDeck,
        cards: prevDeck.cards.filter((card) => card.id !== cardId),
      }));
    }
  };

  if (!deck) return <p>Loading...</p>;

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <div>
        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary">
          Edit
        </Link>
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">
          Study
        </Link>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          Add Cards
        </Link>
        <button onClick={handleDeleteDeck} className="btn btn-danger">
          Delete
        </button>
      </div>
      <h2>Cards</h2>
      <div>
        {deck.cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-body">
              <p>
                <strong>Question:</strong> {card.front}
              </p>
              <p>
                <strong>Answer:</strong> {card.back}
              </p>
              <Link
                to={`/decks/${deckId}/cards/${card.id}/edit`}
                className="btn btn-secondary"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteCard(card.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deck;

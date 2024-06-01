import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

function Home() {
  let history = useHistory();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const loadDecks = async () => {
      const data = await listDecks();
      setDecks(data);
    };
    loadDecks();
  }, []);

  function handleCreateDeck(event) {
    event.preventDefault();
    history.push("/decks/new");
  }

  return (
    <div>
      <header className="jumbotron bg-dark">
        <div className="container text-white">
          <h1 className="display-4">Flashcard-o-matic</h1>
          <p className="lead">Discover The Flashcard Difference.</p>
        </div>
      </header>
      <div className="container">
        <div>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={handleCreateDeck}
          >
            + Create
          </button>
        </div>
        <div>
          <h1>Deck List</h1>
        </div>
        <div>
          {decks.map((deck) => (
            <div key={deck.id} className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <p className="card-text">{deck.description}</p>
                <p className="card-text">{deck.cards.length} cards</p>
                <Link to={`/decks/${deck.id}`} className="btn btn-primary mr-2">
                  View
                </Link>
                <Link
                  to={`/decks/${deck.id}/study`}
                  className="btn btn-secondary mr-2"
                >
                  Study
                </Link>
                <Link
                  to={`/decks/${deck.id}/edit`}
                  className="btn btn-secondary mr-2"
                >
                  Edit
                </Link>
                <Link
                  to={`/decks/${deck.id}/cards/new`}
                  className="btn btn-primary mr-2"
                >
                  Add Cards
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this deck?"
                      )
                    ) {
                      deleteDeck(deck.id);
                      window.location.reload();
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

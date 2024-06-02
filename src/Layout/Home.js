// Home.js
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import ListDeck from "./Decks/ListDeck";

function Home() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDecks = async () => {
      try {
        const data = await listDecks();
        setDecks(data);
      } catch (error) {
        setError(error);
      }
    };
    loadDecks();
  }, []);

  const handleCreateDeck = (event) => {
    event.preventDefault();
    history.push("/decks/new");
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={handleCreateDeck}
        >
          + Create
        </button>
      </div>
      <ListDeck decks={decks} error={error} />
    </div>
  );
}

export default Home;

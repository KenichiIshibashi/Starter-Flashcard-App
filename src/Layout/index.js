import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import Flashcard from "./Flashcard";
import { useHistory } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchDecks() {
      let response = await listDecks();
      setDecks(response);
    }
    fetchDecks();
  }, []);

  const handleDelete = (deckId) => {
    setDecks((prevDecks) => prevDecks.filter((deck) => deck.id !== deckId));
  };

  const handleCreateDeck = () => {
    history.push("/decks/new");
  };

  return (
    <>
      <Header />
      <div className="container">
        <button className="btn bg-secondary bod" onClick={handleCreateDeck}>
          Create Deck
        </button>
        {decks.map((deck) => (
          <div key={deck.id}>
            <Flashcard deck={deck} onDelete={handleDelete} />
          </div>
        ))}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;

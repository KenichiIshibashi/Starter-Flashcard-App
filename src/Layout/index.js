import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import Flashcard from "./Flashcard";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      let response = await listDecks();
      setDecks(response);
    }
    fetchDecks();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {decks.map((deck) => (
          <div key={deck.id}>
            <Flashcard deck={deck} />
          </div>
        ))}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;

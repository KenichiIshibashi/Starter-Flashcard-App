import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState(null);
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
        {/* TODO: Implement the screen starting here */}
        {console.log(decks)}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;

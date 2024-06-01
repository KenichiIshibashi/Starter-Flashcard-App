import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import ListDeck from "./Decks/ListDeck";
import CreateDeck from "./Decks/CreateDeck";
import StudyDeck from "./Decks/StudyDeck";
import ViewDeck from "./Decks/ViewDeck";
import EditDeck from "./Decks/EditDeck";
import AddCard from "./Cards/AddCard";
import EditCard from "./Cards/EditCard";
import Home from "./Home";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks} />
            <ListDeck decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard
              deck={deck}
              setDeck={setDeck}
              card={card}
              setCard={setCard}
            />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard
              deck={deck}
              setDeck={setDeck}
              card={card}
              setCard={setCard}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;

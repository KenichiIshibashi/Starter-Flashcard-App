import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import CreateDeck from "./Layout/CreateDeck";
import EditDeck from "./Layout/EditDeck";
import Deck from "./Layout/Deck";
import "./App.css";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId">
          <Deck />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

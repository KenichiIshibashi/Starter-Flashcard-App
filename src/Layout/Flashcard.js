import "../App.css";
import { deleteDeck } from "../utils/api";

function Flashcard({ deck, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the deck "${deck.name}"?`
    );
    if (confirmDelete) {
      await deleteDeck(deck.id);
      onDelete(deck.id);
    }
  };

  return (
    <fieldset className="card">
      <div className="card-top">
        <h3>{deck.name}</h3>
        <p>{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <section className="deck-options">
        <div className="left-side">
          <button className="bg-secondary dob">View</button>
          <button className="bg-primary dob">Study</button>
        </div>
        <button className="bg-danger dob" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </fieldset>
  );
}

export default Flashcard;

import "../App.css";

function Flashcard({ deck }) {
  return (
    <fieldset className="card">
      <div className="flashcard-header">
        <h3>{deck.name}</h3>
      </div>
      <p>{deck.description}</p>
      <section className="deck-options">
        <div className="left-side">
          <button className="bg-secondary dob">View</button>
          <button className="bg-primary dob">Study</button>
        </div>
        <button className="bg-danger dob">Delete</button>
      </section>
    </fieldset>
  );
}

export default Flashcard;

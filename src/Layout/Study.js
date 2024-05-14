import readDeck from "./utils/api/index.js";

function studyDeck({ deck }) {
  return (
    <>
      <nav>
        <button>Home</button>
        <p>{deck.name}</p>
        <p>Study</p>
      </nav>
    </>
  );
}

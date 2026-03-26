import { useState } from "react";
import "./App.css";

function App() {

  const [mood, setMood] = useState("");

  function handleMood(selectedMood) {
    setMood(selectedMood);
  }

  return (
    <div className="container">
      <h1>Mood Tracker</h1>

      <div className="buttons">
        <button onClick={() => handleMood("Happy")}>😊 Happy</button>
        <button onClick={() => handleMood("Sad")}>😢 Sad</button>
        <button onClick={() => handleMood("Angry")}>😡 Angry</button>
        <button onClick={() => handleMood("Excited")}>🤩 Excited</button>
      </div>

      {mood && (
        <p className="result">Your mood is: {mood}</p>
      )}
    </div>
  );
}

export default App;
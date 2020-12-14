import React, { useState } from "react";
import "./styles.css";
import chat from "../public/chat.png";

var emojiDict = {
  "😃": "Grinning face",
  "😁": "Beaming face - say CHEESE! face",
  "😂": "Funny face with tears of joy",
  "🤣": "Rolling on the floor laughing face",
  "😜": "I'm joking face",
  "🤪": "Silly zany face",
  "🙄": "Eye roll face",
  "😒": "Unamused face",
  "☹️": "Frown face",
  "😠": "Angry face",
  "🙂": "Everything is fine but in reality it is not face",
  "🙃": "Upside down face - Irony or sarcasm",
  "😎": "Cool, carefree attitude face",
  "😖": "Confounded face",
  "😍": "Adoring face",
  "🤩": "Star struck face"
};
var emojis = Object.keys(emojiDict);

export default function App() {
  var [meaning, setMeaning] = useState("");
  var [counter, setCounter] = useState(0);

  function clickHandler() {
    var newCounter = counter + 1;
    setCounter(newCounter);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  //var shoppinglist = ["milk", "eggs", "bread", "butter", "veggies", "fruits"];

  return (
    <div className="App">
      <h1>Up your emoji game!</h1>

      <input onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>
      <h3>The emojis we know are </h3>
      {emojis.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <br></br>
      <button onClick={clickHandler}>❤️</button>
      {counter}
      <img src={chat} />
    </div>
  );
}

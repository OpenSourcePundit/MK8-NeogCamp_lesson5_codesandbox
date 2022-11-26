import React, { useState } from "react";
import "./styles.css";

const emojiDictionary ={
  "💋":"Grinning Face",
  "😜": "Grinning Face with Big Eyes",
  "😉": "Grinning Face with Smiling Eyes",
  "😘": "Beaming Face with Smiling Eyes",
  "😂": "Grinning Squinting Face",
  "😊":"Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😢": "Face with Tears of Joy",
  "😁": "Slightly Smiling Face",
  "😒": "Upside-Down Face"
  }

export default function App() {

  var [emojiIp,setEmojiIp]= useState("");
  
  function onChangeHandler(event){
    var userInput=event.target.value;
    var meaning = emojiDictionary[userInput];
    setEmojiIp(meaning);   
  }
  return (
    <div className="App">
      <h1>Interpret EMOJIS !! </h1>
      <input onChange={onChangeHandler} />
      <h3>{emojiIp}</h3>
    </div>
  );
}

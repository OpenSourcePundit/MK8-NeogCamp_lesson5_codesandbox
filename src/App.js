

const emojiDictionary = {
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face"
};
import React, { useState } from "react";
import "./styles.css";
var emojisWeKnow=Object.keys(emojiDictionary);//converted objects into string

export default function App() {
  var [meaning,setEmoji]= useState("");//needs to be placed here only
   
  function emojiInputHandler(event){
    var userInput=event.target.value;
    var meaning = emojiDictionary[userInput];
    if(meaning===undefined){meaning="We do not have it in our database"}
    setEmoji(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setEmoji(meaning);
  }
  return (
    <div className="App">
      <h1>Inside OUT !!</h1>
      <h4> Interpret EMOJIs</h4>
      <input style={{border:"solid",margin:"auto",width:"5rem",fontSize:"2rem"}} onChange={emojiInputHandler}/>      
      <h2 style={{color:"blue"}}>{meaning}</h2>
      <h3> EMOJIs we know:</h3>
     {
       emojisWeKnow.map(function(emoji){
         return <span onClick={()=>emojiClickHandler(emoji)}
         style={{fontSize:"2rem",padding:".2rem",cursor:"pointer"}}key={emoji}>{emoji}</span>
       })
     }
     <footer style={{backgroundColor:"yellow",marginTop:"15rem",padding:"2rem"}}>
       <div>βΈopensourcepundit2022 </div>
     </footer>
    </div>
  )

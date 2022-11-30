import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😉": "Grinning Face with Smiling Eyes",
  "😘": "Beaming Face with Smiling Eyes",
  "😂": "Grinning Squinting Face",
  "😊": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😅": "Face with Tears of Joy",
  "😁": "Slightly Smiling Face",
  "🙃": "Upside-Down Face"
};
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
      <input style={{border:"solid",margin:"auto",width:"5rem",fontSize:"2rem"}} onChange={emojiInputHandler}  />      
      <h2 style={{color:"blue"}}>{meaning}</h2>
      <h3> EMOJIs we know:</h3>
     {
       emojisWeKnow.map(function(emoji){
         return <span onClick={()=>emojiClickHandler(emoji)}
         style={{fontSize:"2rem",padding:".2rem",cursor:"pointer"}}key={emoji}>{emoji}</span>
       })
     }
     <footer style={{backgroundColor:"yellow",marginTop:"15rem",padding:"2rem"}}>
       <div>Ⓒopensourcepundit2022 </div>
     </footer>
    </div>
  );
}
===
iport React,{useState} from "react";
import "./styles.css";

export default function App(){
  var [userInput,setUserInput]= useState("");
  function onChangeHandler(event){
     setUserInput(event.target.value);
    
  }
  return (
    <div className="App">
      <h1>Inside Out !! </h1>
      <input onChange={onChangeHandler}/>
      <h2>Start editing to see some magic happen!</h2> 
      <h3>Welcome  {userInput}</h3>   
>>>>>>> 1a34b768f96b9ebd89ea2fcacdf9e22e0d6f478e
    </div>
  );
  }
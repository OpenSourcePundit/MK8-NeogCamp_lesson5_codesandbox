import React, {useState} from "react";
import "./styles.css";

export default function App() {
  var colors = "green";
  var col = "red";
  const box = { backgroundColor: colors, color: col };
  var userName = "Shashank"; //prompt("Give me your name");
  const [likeCounter, setLikeCounter] = useState(0);
  function likeClickHandler() {
    var newLikeCounterValue = likeCounter + 2;
        setLikeCounter(newLikeCounterValue);
  }
  console.log("Clickd  ", likeCounter);

  return (
    <div className="App">
      <h1 style={box}>Welcome{userName}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={likeClickHandler}>LikeMe! </button> {likeCounter}
    </div>
  );
}


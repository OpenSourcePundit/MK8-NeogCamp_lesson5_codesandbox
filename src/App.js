import React,{useState} from "react";
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
    </div>
  );
  }
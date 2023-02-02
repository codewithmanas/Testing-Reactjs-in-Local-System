// import logo from './logo.svg';
import React from 'react';
import {useState} from 'react';
import './App.css';


// var headingText = "inside out...";
var color = "green"; 

function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler(){
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }  
  return (
    <div className="App">
      {/* <h1>inside out...</h1> */}
      <h1>inside <span style={{color : color}}>outtt...</span></h1>
      <button onClick={likeClickHandler}>Like Me!</button>{likeCounter}
    </div>
  );
}

export default App;

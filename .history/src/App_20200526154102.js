import React , { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissor: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

const userChoice = (e) => {
  this.setChoice({winner:1,imgURL:choices[e]})
}

function App() {
  const [userChoice,setChoice] = useState({})
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
            <ChoiceCard title="You" winner={userChoice.winner} imgURL={userChoice.imgURL} />
        </div>
        <div className="col-6">
            <ChoiceCard title="Computer" winner={1} imgURL={choices.paper} />
        </div>
      </div>
      
      <div className="row rowOfButtons">
      <button type="button" className="btn btn-info ml-5" onClick={()=>userChoice("rock")}>Rock!</button>
      <button type="button" className="btn btn-info ml-5" onClick={()=>userChoice("paper")}>Paper!</button>
      <button type="button" className="btn btn-info ml-5" onClick={()=>userChoice("scissor")}>Scissor!</button>
      </div>
    </div>
  );
}

export default App;

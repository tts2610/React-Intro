import React , { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissor: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};



function App() {
  function handleClick(e){
    setChoice({...choiceDic, me:{winner:1,imgURL:choices.rock}})
    console.log(choiceDic);
  }
  const [choiceDic,setChoice] = useState({me:{winner:1,imgURL:choices.rock}})
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
            <ChoiceCard title="You" winner={choiceDic.me.winner} imgURL={choiceDic.me.imgURL} />
        </div>
        <div className="col-6">
            <ChoiceCard title="Computer" winner={1} imgURL={choices.paper} />
        </div>
      </div>
      
      <div className="row rowOfButtons">
      <button type="button" className="btn btn-info ml-5" onClick={handleClick}>Rock!</button>
      <button type="button" className="btn btn-info ml-5" >Paper!</button>
      <button type="button" className="btn btn-info ml-5" >Scissor!</button>
      </div>
    </div>
  );
}

export default App;

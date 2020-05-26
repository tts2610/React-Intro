import React , { useState, Component } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import { render } from '@testing-library/react';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissor: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};



export default class App extends Component{
  const [choiceDic,setChoice] = useState({me:{winner:1,imgURL:choices.rock},computer:{winner:0,imgURL:choices.scissor}})

  function handleClick(choice){
    setChoice({...choiceDic,computer:{winner:1,imgURL:choices[choice]}})
    console.log(choiceDic);
  }


  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
              <ChoiceCard title="You" winner={choiceDic.me.winner} imgURL={choiceDic.me.imgURL} />
          </div>
          <div className="col-6">
              <ChoiceCard title="Computer" winner={choiceDic.computer.winner} imgURL={choiceDic.computer.imgURL}/>
          </div>
        </div>
        
        <div className="row rowOfButtons">
        <button type="button" className="btn btn-info ml-5" onClick={()=>handleClick("rock")}>Rock!</button>
        <button type="button" className="btn btn-info ml-5" onClick={()=>handleClick("paper")} >Paper!</button>
        <button type="button" className="btn btn-info ml-5" onClick={()=>handleClick("scissor")} >Scissor!</button>
        </div>
      </div>
    );
  }
  
}

export default App;

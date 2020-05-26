import React , { useState, Component } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import Button from './components/Button';


const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissor: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};



export default class App extends Component{
    // const [choiceDic,setChoice] = useState({me:{winner:1,imgURL:choices.rock},computer:{winner:0,imgURL:choices.scissor}})

  state = {
    me:{winner:1,imgURL:"http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"},
    computer:{winner:0,imgURL:"http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"}
  }
  
  handleClick(choice){
    // setChoice({...choiceDic,computer:{winner:1,imgURL:choices[choice]}})
    // console.log(choiceDic);
  }


  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
              <ChoiceCard title="You" winner={this.state.me.winner} imgURL={this.state.me.imgURL} />
          </div>
          <div className="col-6">
              <ChoiceCard title="Computer" winner={this.state.computer.winner} imgURL={this.state.computer.imgURL}/>
          </div>
        </div>
        
        <div className="row rowOfButtons">
        <Button/>
        </div>
      </div>
    );
  }
  
}

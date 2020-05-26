import React , {Component } from 'react';
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
  constructor(props){
    super(props);
    this.state = {
      me:{winner:1,imgURL:"http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"},
      computer:{winner:0,imgURL:"http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"}
    }
  }

  randomProperty = function (obj) {
    let keys = Object.keys(obj);
    let randomNum = keys.length * Math.random() << 0;
    return [obj[keys[randomNum]],keys[randomNum]];
  };
  
  handleClick = (choice)=>{
    let computerChoice = this.randomProperty(choices);
    let myChoice = choices[choice];
    this.setState({
      me: {winner:1,imgURL:choices[choice]}
    },()=>{
      console.log(this.randomProperty(choices)[1]);
    });
    
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
        <Button type="rock" handleClick={this.handleClick}/>
        <Button type="paper" handleClick={this.handleClick}/>
        <Button type="scissor" handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
  
}

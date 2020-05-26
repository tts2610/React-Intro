import React , {Component } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import Button from './components/Button';
import Result from './components/Result';
import History from './components/History';


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
      computer:{winner:0,imgURL:"http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"},
    }
  }

  randomProperty = function (obj) {
    let keys = Object.keys(obj);
    let randomNum = keys.length * Math.random() << 0;
    return [obj[keys[randomNum]],keys[randomNum]];
  };
  
  handleClick = (myChoice)=>{
    let random = this.randomProperty(choices)
    let computerChoice = random[1];
    let myWinnerState;
    let computerWinnerState;
    if ((myChoice==='rock' && computerChoice==='scissor')||(myChoice==='paper' && computerChoice==='rock')|| (myChoice==='scissor' && computerChoice==='paper')) {
        myWinnerState = 1;
        computerWinnerState = 0;
    }else if((computerChoice==='rock' && myChoice==='scissor')||(computerChoice==='paper' && myChoice==='rock')|| (computerChoice==='scissor' && myChoice==='paper')){
        computerWinnerState = 1;
        myWinnerState = 0;
    }
    else{ 
        computerWinnerState = 2;
        myWinnerState = 2;
    }
    this.setState({
      me: {winner:myWinnerState,imgURL:choices[myChoice]},
      computer:{winner:computerWinnerState,imgURL:random[0]}
    },()=>{
      // if(this.state.me.winner===1&&this.state.computer.winner===0) alert("you win!!!");
      // else alert("you loose!");
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
        <div className="row">
          <div className="col-md-1 rainbow">
          <Result result={[this.state.me.winner,this.state.computer.winner]}/>
          </div>
          <div className="col-md-1 rainbow">

          </div>
        
        </div>
      </div>
    );
  }
  
}

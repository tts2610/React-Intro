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
      isActive:false,
      isPlayPressed:false,
      me:{winner:3,imgURL:""},
      computer:{winner:3,imgURL:""},
      history:[]
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
      computer:{winner:computerWinnerState,imgURL:random[0]},
      history:[...this.state.history,[myWinnerState,computerWinnerState]]
    },()=>{
      console.log(this.state.history)
    });
    
  }

  handleStartGame = () =>{
    this.setState({isActive:true});
  }

  render(){

    if(!this.state.isActive){
      // return(<div className="center">
      //     <button onClick={this.handleStartGame}>Press here to start!!!</button>
      // </div>)
      return (<div className="center" onClick={this.handleStartGame}>
      <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Start Game</span>
    </button>
    </div>)
    }
      
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
        <div className="row mx-auto resultContainer py-5">
          <div className="col-md-3 rainbow mr-5 resultInner">
          <Result result={[this.state.me.winner,this.state.computer.winner]}/>
          </div>
          <div className="col-md-3 rainbow">
            <History historyList={this.state.history}/>
          </div>
        
        </div>
      </div>
    );
  }
  
}

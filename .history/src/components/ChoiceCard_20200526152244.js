import React from 'react'

export default class ChoiceCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {winner:props.winner,title:props.title,imgURL:props.imgURL}
    }
    render(){
        return (<div className={`choice-card ${this.state.winner ? 'winner' : 'loser'}`}>
        <h1>{this.state.title}</h1>
        <img src={this.state.imgURL} alt={this.state.imgURL}/>
        <h1>{this.state.winner ? 'Won' : 'Loss'}</h1>
    </div>)
    }
        
    
}

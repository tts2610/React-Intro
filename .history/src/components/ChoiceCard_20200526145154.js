import React from 'react'

export default class ChoiceCard extends React.Component {
    render(){
        return (<div className={`choice-card ${this.state.winner ? 'winner' : 'loser'}`}>
        <h1>{this.state.title}</h1>
        <img src={this.state.imgURL} alt={this.state.title}/>
        <h1>{this.state.winner ? 'Won' : 'Loss'}</h1>
    </div>)
    } 
        
    
}

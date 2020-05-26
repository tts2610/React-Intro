import React from 'react'

export default class ChoiceCard extends React.Component {
    render(){
        return (<div className={`choice-card ${this.props.winner ? 'winner' : 'loser'}`}>
        <h1>{this.props.title}</h1>
        <img src={this.props.imgURL} alt={this.props.title}/>
        <h1>{this.props.winner ? 'Won' : 'Loss'}</h1>
    </div>)
    } 
        
    
}

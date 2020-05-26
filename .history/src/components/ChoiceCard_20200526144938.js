import React from 'react'

export default class ChoiceCard extends React.Component {
    render(){
        return (<div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
        <h1>{props.title}</h1>
        <img src={props.imgURL} alt={props.title}/>
        <h1>{props.winner ? 'Won' : 'Loss'}</h1>
    </div>)
    } 
        
    
}

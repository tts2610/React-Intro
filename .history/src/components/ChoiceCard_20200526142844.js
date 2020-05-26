import React from 'react'

export default function ChoiceCard(props) {
    return (
        <div className={`choice-card `}>
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title}/>
            <h1>{props.winner ? 'Won' : 'Loss'}</h1>
        </div>
    )
}

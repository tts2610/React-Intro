import React from 'react'

export default function ChoiceCard({ title },{ winner },{ imgURL }) {
    return (
        <div className={`choice-card ${winner ? 'winner' : 'loser'}`}>
            <h1>{title}</h1>
            <img src={imgURL} alt={title}/>
            <h3>{winner ? 'Won' : 'Loss'}</h3>
        </div>
    )
}

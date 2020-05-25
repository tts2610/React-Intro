import React from 'react'

export default function ChoiceCard(props) {
    return (
        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
        </div>
    )
}

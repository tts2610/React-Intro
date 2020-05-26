import React from 'react'

export default function ChoiceCard({ title, winner, imgURL }) {

    if (winner === 2) {
        return ( <
            div className = { `choice-card tie` } >
            <
            h1 > { title } < /h1> <
            img src = { imgURL }
            alt = { imgURL }
            /> <
            h1 > Tie < /h1> <
            /div>
        );
    }
    if (winner === 3) {
        return ( <
            div className = { `choice-card tie` } >
            <
            h1 > { title } < /h1> <
            img src = { imgURL }
            alt = { imgURL }
            /> <
            h1 > < /h1> <
            /div>
        );
    }
    return ( <
        div className = { `choice-card ${winner ? 'winner' : 'loser'}` } >
        <
        h1 > { title } < /h1> <
        img src = { imgURL }
        alt = { imgURL }
        /> <
        h1 > { winner ? 'Won' : 'Loss' } < /h1> <
        /div>
    );
}
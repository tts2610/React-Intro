import React from 'react'

export default function Button({handleClick}){
    return (
        <div>
            <button type="button" className="btn btn-info ml-5" onClick={handleClick("rock")} >Rock!</button>
            <button type="button" className="btn btn-info ml-5" onClick={handleClick("paper")}>Paper!</button>
            <button type="button" className="btn btn-info ml-5" onClick={handleClick("scissor")}>Scissor!</button>
        </div>  
    );
}
import React, {Component} from 'react'

export default function Box(props) {
    return (
        <div className={`box ${props.color}`}>
            my {props.name} box
        </div>
    )
}

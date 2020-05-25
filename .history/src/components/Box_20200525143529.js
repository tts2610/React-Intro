import React, {Component} from 'react'

export default class Box(props) extends Component {
    return (
        <div className={`box ${props.color}`}>
            my {props.name} box
        </div>
    )
}

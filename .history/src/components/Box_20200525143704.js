import React, {Component} from 'react'

export default class Box extends Component {
    render(){
        return (
            <div className={`box ${this.props.color}`}>
                my {this.props.name} box
            </div>
        )
    }
    
}

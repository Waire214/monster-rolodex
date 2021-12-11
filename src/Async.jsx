import React, { Component } from 'react'

export class Async extends Component {
    constructor(props) {
        super(props)
        this.state = {
             meaningOfLife: 47
        }
    }
    //alternate class syntax, uses no class
    // state = {
    //     meaningOfLife: 47
    // }
    
    handleClick = () => {
        // bad practice
        // this.setState({meaningOfLife: this.state.meaningOfLife + 1}, 
        //     () => console.log(this.state.meaningOfLife))
        this.setState((prevState, prevProps) => {
            return {meaningOfLife: prevState + prevProps.increment}
        },
            () => console.log(this.state.meaningOfLife))
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.meaningOfLife}
                </p>
                <button
                    onClick={this.handleClick}
                >

                </button>
            </div>
        )
    }
}

export default Async

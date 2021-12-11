import React, { Component } from 'react'

export class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)
        console.log("constructor!");
    }

    componentDidMount() {
        console.log("componentDidMount!");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount!");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate!", nextProps);
        return true;
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleMethods

import React, { Component } from 'react'
import CardListComponent from '../components/cardlist/CardListComponent.jsx';

class Sample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             monsters: []
        };
    }

    //lifecycle methods
    //when react renders for the first time, 
    //it calls componentdidmount
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters:users}))
    }
    render() {
        return (
            <div>
                <CardListComponent />
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
                }
            </div>
        )
    }
}

export default Sample

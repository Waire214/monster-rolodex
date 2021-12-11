import React, { Component } from 'react'
import './App.css'
import Async from './Async';
import CardListComponent from './components/cardlist/CardListComponent';
import SearchBoxComponent from './components/searchbox/SearchBoxComponent';
class App extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           monsters: [],
           searchField: ""
      };

      // this.handleChange = this.handleChange.bind(this)
  }

  //lifecycle methods
  //when react renders for the first time, 
  //it calls componentdidmount
  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }
  componentDidUpdate() {
    console.log("componentDidUpdate!");
}

  //leverage es6 arreow functions. it allows to set the context of this to the app component
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
      const { monsters, searchField } = this.state;
      //const monsters = this.state.monsters
      //const searchField = this.state.searchField
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      
      return (
          <div className="App">
              <h1>MONSTER ROLODEX</h1>
              {/* <CardListComponent monsters={this.state.monsters}>
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
                }
              </CardListComponent> */}

              {/* <input type="search" placeholder="search monsters" onChange={e => {
                this.setState({ searchField: e.target.value }, () => console.log(this.state))
                // console.log(this.state)
              }} /> */}

              {/* <input type="search" placeholder="search monsters" onChange={e => 
                this.setState({ searchField: e.target.value })}
              /> */}
              <SearchBoxComponent
                placeholder="search monsters"
                handleChange={this.handleChange}
              />
              <CardListComponent monsters={filteredMonsters} />
              <Async increment={1} />
          </div>
      )
  }
}

export default App

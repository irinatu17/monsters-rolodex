import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Searchbox } from "./components/search-box/search-box.component.jsx";
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [ ],
      searchField: "",
    };
  }

  //  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {

    // Distructuring
    const { monsters, searchField } = this.state; //same as const monsters = this.state.monsters; const searField = this.state.searchField;
    
    // Create a new array based on the function that we pass into it:
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <Searchbox 
        placeholder="search monsters" 
        handleChange={e => this.setState({ searchField: e.target.value })} 
        />
      <CardList monsters={filteredMonsters} /> 
    </div>
    )
  }
}

export default App;

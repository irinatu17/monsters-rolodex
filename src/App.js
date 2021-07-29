import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component.jsx";
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [ ]
    };
  }

  //  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
      <CardList monsters={this.state.monsters} /> 
    </div>
    )
  }
}

export default App;

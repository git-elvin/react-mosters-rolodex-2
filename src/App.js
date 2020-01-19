import React, { Component }from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox }  from './components/card-list/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monters: users}));
  }

  handleChange = e =>{
    this.setState({ searchField: e.target.value})
  }

  render(){
    const { monters, searchField } = this.state;
    const filteredMosters  = monters.filter(monter => 
          monter.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
    return(
      <div className="App">
          <h1> Mosters Rolodex </h1>
          <SearchBox 
            placeholder='search moster..' 
            handleChange={this.handleChange}
          />
        <CardList monters={filteredMosters} /> 
      </div>
    )
  }
}

export default App;

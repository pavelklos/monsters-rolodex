import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Yihua Zhang',
      monsters: [],
      searchField: ''
      // monsters: [
      //   { name: 'Frankenstein', id: 1 },
      //   { name: 'Dracula', id: 2 },
      //   { name: 'Zombie', id: 3 }
      // ]
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    // console.log('componentDidMount()');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users => console.log(users))
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    // console.log('render()');
    const { monsters, searchField } = this.state; // destructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
          // handleChange= {e => this.setState({ searchField: e.target.value })}
        />
        <p>filteredMonsters.length = <b>{ filteredMonsters.length }</b></p>
        <p>searchField = <b>{ searchField }</b></p>
        <CardList monsters={ filteredMonsters } />
      </div>
    )
  }

  // render() {
  //   console.log('render()');
  //   return (
  //     <div className="App">
  //       <CardList name="Yihua">
  //         {
  //           this.state.monsters.map(
  //             monster => <h3 key={monster.id}>{ monster.name }</h3>
  //           )
  //         }
  //       </CardList>
  //     </div>
  //   )
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
  //         <p>{ this.state.string }</p>
  //         <p>{ this.state.monsters.length }</p>
  //         <button onClick={ () => this.setState({ string: 'Hello Andrei Neagoie' }) }>Change Text</button>
  //       </header>
  //     </div>
  //   )
  // }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

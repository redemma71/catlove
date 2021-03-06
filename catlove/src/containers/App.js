import React, { Component } from 'react';
import logo from 'images/logo.svg';
import 'styles/App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then( (response) => response.json() )
      .then( (users) => this.setState( {users}) )
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map( (user) => 
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;

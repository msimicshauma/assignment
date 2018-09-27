import React, { Component } from 'react';
import Users from './components/allUsers';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('/api/users/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      }).then(state => {
        this.setState({
          users: state
        });

        console.log('STATE');
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;

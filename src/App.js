import React, { Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    count: 0,
    like : "likes"
  }

  handleClick = (e) => {
    this.setState ({
      count: this.state.count +1,
      like: this.state.count === 0 ? "like" : "likes"
    })
  }

  

render() {
  return (
    <>
      <button onClick={this.handleClick}> {this.state.count} {this.state.like} </button>
    </>
  );
  }
}

export default App;

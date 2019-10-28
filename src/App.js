import React, { Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    count: 0,
    like: "like"
  }

  handleClick = (e) => {
    this.setState (e => {
      return {count: e.count +1}
    })
    if(this.state.count === 0){
      this.setState(e => {
        return {like : e.like= "like"}
    })
   } else {
     this.setState (e => {
     return { like: e.like = "likes"}
    })
  }
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

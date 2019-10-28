import React, { Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    count: 0,
    like: "Like"
  }

  handleClick = (e) => {
    this.setState (e => {
      return {count: e.count +1}
    })
    if(this.state.count === 0){
      this.setState(e => {
        return {like : e.like= "Like"}
    })
   } else {
     this.setState (e => {
     return { like: e.like = "Likes"}
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

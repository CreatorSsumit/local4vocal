import React, { Component } from 'react';

import Home from "./components/fixcomponent/home "


class App extends Component {

  state={
    value:false
  }

// change=()=>{
//  this.setState({
//    value:!this.state.value
//  })
//  console.log(this.state.value)
// }

  render() {
    return (
      <div>
       <Home />
       
      </div>
    )
  }
}


export default App
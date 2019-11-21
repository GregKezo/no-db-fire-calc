import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'hi'
    }
  }


  render() {

    return (
      <div className="App">
        <h1>hello there</h1>
      </div>
    );
  }
}

export default App;

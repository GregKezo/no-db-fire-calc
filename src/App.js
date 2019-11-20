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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <h1>hello there</h1>
      </div>
    );
  }
}

export default App;

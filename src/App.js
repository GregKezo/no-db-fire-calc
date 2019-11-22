import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import axios from 'axios'
import NewPersonCard from './components/NewPersonCard'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      people: [],
      activePerson: null,
      newPersonForm: true,
      new_first_name: '', 
      new_last_name: '', 
      new_age: 0, 
      new_income: 0, 
      new_expenses: 0, 
      new_interest_rate: 0
    }
  }

  componentDidMount() {
    axios.get('/api/people').then( (res) => {
      this.setState({ people: res.data })
    })
    .catch( err => console.log(err))
  }

  activator = (id) => {
    let peopleObj = this.state.people.filter( ele => ele.id === +id)
    this.setState({
      activePerson: peopleObj, 
      newPersonForm: false
    }) 
  }

  createPerson = (fname, lname, age, inc, exp, ir) => {
    axios.post('api/people').then( res => {
      this.setState({ people: res.data })
    })
    .catch( err => console.log(err))
  }

  handleUpdate = (iden, val) => {
    let property = iden
    this.setState({
      property : val
    })
  }

  render() {
    if (this.state.newPersonForm) {
      return (
        <div className="App">
          <Header people={this.state.people}
            activeFn = {this.activator}
          />
          <NewPersonCard 
          createFn={this.createPerson} 
          handleFn={this.handleUpdate}
          />
        </div>   
      )
    } else {
        return (
        <div className="App">
          <Header people={this.state.people}
            activeFn = {this.activator}
          />
          <Body person={this.state.activePerson} 
          />
        </div> 
        )
    }
  }
    
}


export default App;

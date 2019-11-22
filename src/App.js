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
      // new_first_name: '', 
      // new_last_name: '', 
      // new_age: 0, 
      // new_income: 0, 
      // new_expenses: 0, 
      // new_interest_rate: 0
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

  createPerson = () => {
    const body = this.state 
    axios.post('api/people', body).then( res => {
      this.setState({ people: res.data })
          //todo do api query to set active person to be the person you just made.
    })
    .catch( err => console.log(err))

  }

  deletePerson = (id) => {
    axios.delete(`api/people/${id}`).then( res => {
      this.setState({ people: res.data, newPersonForm: true })
    })
    .catch( err => console.log(err))
  }

  handleUpdate = (e) => {
    let {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  updatePerson = (id) => {
    const body = this.state
    axios.put(`api/people/${id}`, body).then( res => {
      this.setState({people:res.data })
      this.activator(id)
    })
  }

  render() {
    if (this.state.newPersonForm) {
      return (
        <div className="App">
          <Header people={this.state.people}
            activeFn = {this.activator}
            deleteFn = {this.deletePerson}
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
            deleteFn = {this.deletePerson}
          />
          <Body person={this.state.activePerson} 
          handleFn={this.handleUpdate}
          updateFn={this.updatePerson}
          />
        </div> 
        )
    }
  }
    
}


export default App;

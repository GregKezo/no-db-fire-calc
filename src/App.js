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
      toggleEdit: false,
      first_name: '',
      last_name: ''
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
      newPersonForm: false,
      toggleEdit: false
    }) 
    
  }

  toggleNewPerson = () => {
    this.setState({ newPersonForm: true})
  }

  createPerson = () => {
    const body = this.state 
    axios.post('api/people', body).then( res => {
      console.log(res.data)
      this.setState({ people: res.data })
    })
    //// add a .next() to get the biggest id and display that in activator()
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

  editClick = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit})
  }

  updatePerson = (id) => {
    console.log(`hit update for ${id}`)
    const body = this.state
    axios.put(`api/people/${id}`, body).then( res => {
      this.setState({people:res.data })
      this.activator(id)
      this.setState({})
    })
  }

  handleSearch = () => {
    let {first_name, last_name} = this.state
    axios.get(`/api/people?first_name=${first_name}&last_name=${last_name}`).then( res => {
      this.setState({ people: res.data})
    })
    .catch(err => console.log(err))


  }

  render() {
    return(
    <div className="App">
      <Header 
        people={this.state.people}
        activeFn = {this.activator}
        deleteFn = {this.deletePerson}
        newPersonFn = {this.toggleNewPerson}
        handleFn = {this.handleUpdate}
        searchFn = {this.handleSearch}
      />
      {this.state.newPersonForm
        ? <NewPersonCard 
            createFn={this.createPerson} 
            handleFn={this.handleUpdate}
          />
        : <Body 
            person={this.state.activePerson} 
            handleFn={this.handleUpdate}
            updateFn={this.updatePerson}
            editFn={this.editClick}
            toggleEdit={this.state.toggleEdit}
          />
      }
    </div>
    )
  }
    
}


export default App;

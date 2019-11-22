import React, {Component} from 'react'
import PersonName from './PersonName'


class Menu extends Component {
  constructor(props){
    super(props)
    this.state={
      first_name: '',
      last_name: '',
      results: null
    }
  }

  handleSearch = () => {
    let filteredArr= this.props.people
      if (this.state.first_name) {filteredArr = this.props.people.filter( ele => {
       return ele.first_name.includes(this.state.first_name)})}
      if (this.state.last_name) {filteredArr = this.props.people.filter( ele => {
        return ele.last_name.includes(this.state.last_name)})}
    
    this.setState({results: filteredArr})
    // this.props.activeFn()
  }

  // handleChange = (e) => {
  //   let {name, value} = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  render() {
    return(
      <section className="menu-container">
        <button onClick={this.props.newPersonFn}>New Person</button>
        Find person: 
        First:<input 
          name= "first_name" 
          onChange={ e => this.props.handleFn(e) }
          /> 
        Last:<input 
          name= "last_name"
          onChange={ e => this.props.handleFn(e) }
          />
          <button onClick={this.props.searchFn}>Search</button>
        {!this.state.results
          ? this.props.people.map( ele => {
          return(
            <PersonName 
              key={ele.id} 
              name={`${ele.first_name} ${ele.last_name}`} 
              id={ele.id}
              activeFn = {this.props.activeFn}
              deleteFn = {this.props.deleteFn}
              />
          )})
          : this.state.results.map( ele => {
            return(
              <PersonName 
                key={ele.id} 
                name={`${ele.first_name} ${ele.last_name}`} 
                id={ele.id}
                activeFn = {this.props.activeFn}
                deleteFn = {this.props.deleteFn}
                />
          )})
        }
      </section>
    )
  }
}

export default Menu
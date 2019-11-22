import React, {Component} from 'react'
import PersonName from './PersonName'
import axios from 'axios'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "Menu"
    }
  }


  render() {
    return(
      <div className="menu-container">
        <h1>{this.state.name}</h1>
        {this.props.people.map( ele => {
          return(
            <PersonName 
              key={ele.id} 
              name={`${ele.first_name} ${ele.last_name}`} 
              id={ele.id}
              activeFn = {this.props.activeFn}
              />
          )
        })}
      </div>
    )
  }
}

export default Menu
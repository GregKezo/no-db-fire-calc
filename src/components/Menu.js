import React, {Component} from 'react'
import PersonName from './PersonName'


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
        <button onClick={this.props.newPersonFn}>New Person</button>
        {this.props.people.map( ele => {
          return(
            <PersonName 
              key={ele.id} 
              name={`${ele.first_name} ${ele.last_name}`} 
              id={ele.id}
              activeFn = {this.props.activeFn}
              deleteFn = {this.props.deleteFn}
              />
          )
        })}
      </div>
    )
  }
}

export default Menu
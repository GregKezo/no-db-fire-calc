import React, {Component} from 'react'
import PersonName from './PersonName'
import {Button, Input, Icon} from '@material-ui/core'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state={
      first_name: '',
      last_name: '',
      results: null
    }
  }



  render() {
    return(
      <section className="menu-container">
       <div className="move-it">
          <Button 
            onClick={this.props.newPersonFn}
            variant="contained"
            color="primary"
          >New Person</Button>
      </div> 
      <div className="searchable move-it">
        Find person: <br/>
        <Input 
          name= "first_name" 
          placeholder="First Name"
          onChange={ e => this.props.handleFn(e) }
          /> <br/>
        <Input 
          name= "last_name"
          placeholder="Last Name"
          onChange={ e => this.props.handleFn(e) }
          />
          <Button 
            onClick={this.props.searchFn}
            variant= "outlined"
            color="default"
          >
            <Icon>search</Icon>
          </Button>
      </div>
      
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
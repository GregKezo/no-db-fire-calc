import React, {Component} from 'react'
import Menu from './Menu'



class Header extends Component {
  constructor(props){
    super(props)
    this.state = ({
      name: 'header'
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <Menu people={this.props.people}
          activeFn = {this.props.activeFn}
          />
      </div>
    )
  }

}

export default Header
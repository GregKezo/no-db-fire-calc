import React, {Component} from 'react'
import Menu from './Menu'



class Header extends Component {
  constructor(props){
    super(props)
    this.state = ({
      toggleMenu: false
    })
  }

  handleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu})
  }

  render(){
    return(
      <header className="header">
        <div className="logo">Logo</div>
        <button onClick={this.handleMenu}>hamburger</button>
        {this.state.toggleMenu
        ? <Menu people={this.props.people}
          activeFn = {this.props.activeFn}
          deleteFn = {this.props.deleteFn}
          newPersonFn = {this.props.newPersonFn}
          handleFn = {this.props.handleFn}
          searchFn = {this.props.searchFn}
          />
        : <div>emptiness</div>
        }
      </header>
    )
  }

}

export default Header
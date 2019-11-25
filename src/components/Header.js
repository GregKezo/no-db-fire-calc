import React, {Component} from 'react'
import Menu from './Menu'
import {Button, Icon} from '@material-ui/core'




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

  activeFn = (props) => {
    console.log(`hit activeFn`)
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render(){
    return(
      <header className="header">
        <div></div>
        <div className="logo">FI in the Sky</div>
          <div className="move-it">
            <Button 
              onClick={this.handleMenu}
              variant="contained"
              color="default"
            >
              <Icon>menu</Icon>
            </Button>
          </div>
        {this.state.toggleMenu
        ? <Menu people={this.props.people}
          activeFn = {this.props.activeFn}
          deleteFn = {this.props.deleteFn}
          newPersonFn = {this.props.newPersonFn}
          handleFn = {this.props.handleFn}
          searchFn = {this.props.searchFn}
          />
        : <div className="nope">div</div>
        }
      </header>
    )
  }

}

export default Header
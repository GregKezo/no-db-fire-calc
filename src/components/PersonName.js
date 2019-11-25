import React from 'react'
import {Button, Icon} from '@material-ui/core'


const PersonName = (props) => {
  return(
    <div className="menu-name-space">
      <div className="name-words"
        id={props.id}
        onClick={ (e) => props.activeFn(e.target.id)
        }
      >
        {props.name} 
      </div>
      <Button name={props.id} 
        onClick={ e => props.deleteFn(e.target.name)}>
          <Icon>delete</Icon>
      </Button>
    </div>
  )
}

export default PersonName
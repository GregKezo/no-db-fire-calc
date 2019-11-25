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
       <span className="name" 
       id={props.id}
       onClick={ (e) => props.activeFn(e.target.id)} >{props.name} </span> 
      </div>
      <button id={props.id} 
        onClick={ e => props.deleteFn(e.target.id)}>
          Delete
      </button>
    </div>
  )
}

export default PersonName
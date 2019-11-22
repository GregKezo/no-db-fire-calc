import React from 'react'


const PersonName = (props) => {
  return(
    <div className="menu-name-space">
      <span className="name-words"
        id={props.id}
        onClick={ (e) => props.activeFn(e.target.id)}
      >{props.name}</span>
    </div>
  )
}

export default PersonName
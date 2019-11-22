import React from 'react'

const PersonCard = (props) => {
  return(
    <div>
      <h1>{`${props.first_name} ${props.last_name}`}</h1>
      <button className="edit-button" onClick={props.editFn}>Edit</button>
    </div>
  )
}

export default PersonCard
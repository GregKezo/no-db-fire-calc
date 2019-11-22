import React from 'react'

const PersonCard = (props) => {

  if ( !props.toggleEdit ) {
  return(
    <div>
      <h1>{`${props.first_name} ${props.last_name}`}</h1>
      <button className="edit-button" onClick={props.editFn}>Edit</button>
    </div>
  )

  } else {
    return(
      <div>
        <input name="new_first_name" onChange={ e => props.handleFn(e)} placeholder= {props.first_name} />
        <input name="new_last_name" onChange={ e => props.handleFn(e)} placeholder={props.last_name}/>
        <input name="new_age" onChange={ e => props.handleFn(e)} placeholder={props.age}/>
        <input name="new_income" onChange={ e => props.handleFn(e)} placeholder={props.income}/>
        <input name="new_expenses" onChange={ e => props.handleFn(e)} placeholder={props.expenses}/>
        <input name="new_interest_rate" onChange={ e => props.handleFn(e)} placeholder={props.interest_rate}/>
        <button id={props.id} onClick={e => {
            props.updateFn(e.target.id)
            props.editFn()
          }
        }
        >Save Changes</button>
      </div>
    )
  }
}

export default PersonCard
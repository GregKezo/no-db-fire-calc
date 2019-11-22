import React from 'react'

const NewPersonCard = (props) => {
  return(
    <div>
      <h4>NewPersonCard</h4>
      <input name="new_first_name" onChange={ e => props.handleFn(e)} placeholder="First Name"/>
      <input name="new_last_name" onChange={ e => props.handleFn(e)} placeholder="Last Name"/>
      <input name="new_age" onChange={ e => props.handleFn(e)} placeholder="Age"/>
      <input name="new_income" onChange={ e => props.handleFn(e)} placeholder="Income"/>
      <input name="new_expenses" onChange={ e => props.handleFn(e)} placeholder="Expenses"/>
      <input name="new_interest_rate" onChange={ e => props.handleFn(e)} placeholder="Interest Rate"/>

      <button onClick={props.createFn}>Make a new person</button>
    </div>
  )
}

export default NewPersonCard
import React from 'react'
import {Input, Button} from '@material-ui/core'

const NewPersonCard = (props) => {
  return(
    <div className="new-person-form">
      <h2>Add a Person</h2>
      <Input name="new_first_name" onChange={ e => props.handleFn(e)} placeholder="First Name"/>
      <Input name="new_last_name" onChange={ e => props.handleFn(e)} placeholder="Last Name"/> 
      <br/>
      <Input name="new_age" onChange={ e => props.handleFn(e)} placeholder="Age"/> 
      <br />
      <Input name="new_income" onChange={ e => props.handleFn(e)} placeholder="Income"/>
      <Input name="new_expenses" onChange={ e => props.handleFn(e)} placeholder="Expenses"/>
      <Input name="new_interest_rate" onChange={ e => props.handleFn(e)} placeholder="Interest Rate"/>
      <br/> 
      <br/>
      <Button variant="contained" 
        color="default" 
        onClick={props.createFn}>Make New person</Button>
    </div>
  )
}

export default NewPersonCard
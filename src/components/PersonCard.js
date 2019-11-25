import React from 'react'
import {Input, Button} from '@material-ui/core'

const PersonCard = (props) => {

  if ( !props.toggleEdit ) {
  return(
    <section className="person-card">
      <h2 className="name">{`${props.first_name} ${props.last_name}`}</h2>
        <div className="number-area">{props.age}</div>
        <div className="financials">
          <div className="number-area">Income: {props.income}</div> 
          <div className="number-area">Expenses: {props.expenses}</div>
          <div className="number-area">Interest Rate: {props.interest_rate} %</div>
        </div>
        <br/>
        <br/>
      <Button variant="contained"
        
        className="edit-button" onClick={props.editFn}>Edit</Button>
    </section>
  )

  } else {
    return(
      <div className="new-person-form">
        <h2>Edit this Person</h2>
        <Input name="new_first_name" onChange={ e => props.handleFn(e)} placeholder= {props.first_name} />
        <Input name="new_last_name" onChange={ e => props.handleFn(e)} placeholder={props.last_name}/>
        <br/>
        <Input name="new_age" onChange={ e => props.handleFn(e)} placeholder={props.age}/>
        <br/>
        <Input name="new_income" onChange={ e => props.handleFn(e)} placeholder={props.income}/>
        <Input name="new_expenses" onChange={ e => props.handleFn(e)} placeholder={props.expenses}/>
        <Input name="new_interest_rate" onChange={ e => props.handleFn(e)} placeholder={props.interest_rate}/>
        <br/>
        <br/>
        <button 
        className="button"
          id={props.id} onClick={e => {
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
import React from 'react'
import {Input, Button} from '@material-ui/core'


const MyInput = (props) => {
  return(
    <div>
      <Input name={props.name} onChange={ e => props.handleFn(e)}
    </div>
  )


}
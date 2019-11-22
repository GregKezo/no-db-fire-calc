import React, {Component} from 'react';
import PersonCard from './PersonCard'
import Graph from './Graph'
import Table from './Table'
import NewPersonCard from './NewPersonCard';


class Body extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

 

  render() {
    let { id, first_name, last_name, income, expenses, age, interest_rate} = this.props.person[0]
    return ( 
      <div>
      <h1>Body Component</h1>
      <PersonCard 
        id={id}
        first_name={first_name}
        last_name={last_name}
        income={income}
        expenses={expenses}
        age={age}
        interest_rate={interest_rate}
        editFn= {this.props.editFn}
        handleFn = {this.props.handleFn}
        updateFn = {this.props.updateFn}
        toggleEdit= {this.props.toggleEdit}
        />
      <Graph />
      <Table />
    </div>      
    ) 
  }    
}



export default Body
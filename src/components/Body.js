import React, {Component} from 'react';
import PersonCard from './PersonCard'
import Graph from './Graph'
import Table from './Table'



class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      tableData: [],
      yearsArr: [],
      savingsArr: [],
      intEarnedArr: [],
      totalArr: []
    }
  }

componentDidMount() {
  let { income, expenses, interest_rate} = this.props.person[0]
  let savingsAmt = +(income - expenses).toFixed(2);
  let interestRate = +(interest_rate / 100);
  let totalSaved = 0;
  // let year = 0;
  let tableData = []
  let rowData = []


 const tableMaker = () => {
      totalSaved = 0
      for ( let year = 1; year <= 10; ++year) {
        let cell1 = year;
        let cell2 = +(totalSaved + savingsAmt).toFixed(2)
        let cell3 = +(cell2 * interestRate).toFixed(2)
        let cell4 = +(cell2 + cell3)
        rowData = [ cell1, 
          cell2, 
          cell3, 
          cell4 ]
        totalSaved = cell4
        tableData.push(rowData)
      }
      this.setState({
        tableData: tableData
      })
    }

    tableMaker()
    // console.log(tableData)


    const yearsArr = []
    const savingsArr = []
    const intEarnedArr = []
    const totalArr =[]

    const arrMaker = () => {
      totalSaved = 0
      for ( let year = 1; year <= 10; ++year) {
        let cell1 = year;
        let cell2 = (totalSaved + savingsAmt)
        let cell3 = (cell2 * interestRate)
        let cell4 = (cell2 + cell3)
        yearsArr.push(cell1)
        savingsArr.push(cell2.toFixed(2))
        intEarnedArr.push(cell3.toFixed(2))
        totalArr.push(cell4.toFixed(2))
        totalSaved= cell4
      }
      this.setState({
        yearsArr: yearsArr,
        savingsArr: savingsArr,
        intEarnedArr: intEarnedArr,
        totalArr: totalArr
      })
    }

  arrMaker()


    
}




  render() {
    let { id, first_name, last_name, income, expenses, age, interest_rate} = this.props.person[0]
    return ( 
      <div className="body">
   
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
      <Graph 
        yearsArr={this.state.yearsArr}
        savingsArr={this.state.savingsArr}
        intEarnedArr={this.state.intEarnedArr}
        totalArr={this.state.totalArr}
        />
      <Table />
    </div>      
    ) 
  }    
}



export default Body
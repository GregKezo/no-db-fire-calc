import React from 'react'
import Chart from 'chart.js'
import { white } from 'ansi-colors';

class Graph extends React.Component {
  constructor(props){
    super(props)
    
  }

componentDidUpdate() {

  var ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
        //   {
        //     label: 'Savings',
        //     data: this.props.savingsArr
        // },
        {
            label: 'Interest Earned',
            data: this.props.intEarnedArr
        },{
          label: 'Expenses',
          data: this.props.expensesArr
        }],
        labels: this.props.yearsArr 
    },
    options: {
      backgroundColor: `rgba(0,0,0,0.9)`,
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    // suggestedMin: 50,
                    // suggestedMax: 1000000
                }
            }]
        }
    }
  });
}


  
render() {
  
  return(
    <section className="graph new-person-form">
      <canvas id="myChart" >

      </canvas>

    </section>
  )
 

}

}

export default Graph
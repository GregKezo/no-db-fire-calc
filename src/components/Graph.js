import React from 'react'
import Chart from 'chart.js'

class Graph extends React.Component {
  constructor(props){
    super(props)
    
  }

componentDidUpdate() {

  var ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Savings',
            data: this.props.savingsArr
        },{
            label: 'Interest Earned',
            data: this.props.intEarnedArr
        }],
        labels: this.props.yearsArr 
    },
    options: {
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
      <canvas id="myChart" width="400" height="400">

      </canvas>

    </section>
  )
 

}

}

export default Graph
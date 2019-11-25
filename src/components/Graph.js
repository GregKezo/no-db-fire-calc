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
            label: 'First dataset',
            data: this.props.savingsArr
        },{

        }],
        labels: this.props.yearsArr
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // suggestedMin: 50,
                    // suggestedMax: 100000
                }
            }]
        }
    }
  });
}


  
render() {
  
  return(
    <section className="graph">
      <canvas id="myChart" width="400" height="400">

      </canvas>

    </section>
  )
 

}

}

export default Graph
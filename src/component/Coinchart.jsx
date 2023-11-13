import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const Coinchart = ({ data, id }) => {
    
    const [chartData,setchartData] = useState({
        labels : [200,201,203],
        datasets:[{
            label: "serbas",
            data: [2003,2004,2004]
        }]
    })
    
    return (
        <div className='' style={{width: "800px"}}>
            <Line data={chartData}/>
        </div>
    )
}

export default Coinchart



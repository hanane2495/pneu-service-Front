import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import styled from 'styled-components';
  
const Styles = styled.div``;


const Chart1 = () => {
    
    const opt = {
        chart: {
            color:'rgb(255,0,0, 0.5)',
            foreColor:'#777',
            type: 'area',
            height: 200,
            zoom: {
              enabled: false
            }
        }, dataLabels: {
            enabled : false
        },
          title: {
            text: 'Analyse fondamentale des ventes',
            align: 'left'
        },
          subtitle: {
            text: 'Mouvement des ventes',
            align: 'left'
        },
          labels: ['2020-04-03', '2020-04-10', '2020-04-17', '2020-04-24', '2020-04-31'],
          xaxis: {
            type: 'datetime',
        },
          yaxis: {
            opposite: true
        },
          legend: {
            horizontalAlign: 'left'
        },
        colors:['#F44336']
    }
    const ser = [{
        name: 'ventes',
        data: [100, 457, 167, 893, 263]
    }];

    const [options, setOptions] = useState(opt);
    const [series, setSeries] = useState(ser);
    return(
        <Chart
           options={options}
           series={series}
           type="area" 
           height={200}
        />
    )
}

export default Chart1
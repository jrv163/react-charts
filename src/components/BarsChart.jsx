
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export const BarsChart = () => {
    
    const [chart, setChart] = useState([]);

    // Url ranking criptomonedas, visite https://developers.coinranking.com/api/documentation/coins
    const baseUrl = "https://api.coinranking.com/v2/coins?limit=10";
 

    useEffect(() => {
       const fetchCoins = async() => {
            await fetch(`${ baseUrl  }`
            ).then( resp => {
                resp.json()
                .then( json => {
                    setChart( json.data );
                })
            }).catch(error => {
                console.log( error )
            })
       } 
       fetchCoins();
    }, [baseUrl])

    console.log({ chart });
    
   const data = {
    labels: chart?.coins?.map( coin => coin.name ),
    datasets: [{
      label: `${ chart?.coins?.length } Coins Disponibles `,
      data: chart?.coins?.map( coin => coin.price ),
      borderWidth: 1,
      backgroundColor: [

          'rgba(0, 220, 195, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 255, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(75, 192, 255, 0.5)',
      ]
    }]
  }

  const options = {
    mainainAspectRatio: false,
    scales: {
      y: {
        
        beginAtZero: true
      }
    },
    legend: {
        label :{
            fontSize: 26
        }
    }
  }

  return (
    <Bar 
        data={ data }
        height={400}
        options={ options }
    />
  )
}


import React, { useEffect, useState } from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export const LinesChart = () => {
    
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
        tension: 0.5,
        fill : true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99, 132)',
    }]
  }

  const options = {
    mainainAspectRatio: false,
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
  }

  return (
    <Line 
        data={ data }
        height={400}
        options={ options }
    />
  )
}

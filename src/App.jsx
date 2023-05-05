import { useEffect, useState } from 'react';
import Select from 'react-select';


import './App.css'
import { BarsChart, LinesChart, PiesChart } from './components'

function App() {

  const [chart, setChart] = useState('SelecChart');

  const [barContentVisible, setBarContentVisible] = useState(false);
  const [lineContentVisible, setLineContentVisible] = useState(false);
  const [pieContentVisible, setPieContentVisible] = useState(false);


  useEffect(() => {
    chart === "barChart"
     ? setBarContentVisible(true)
     : setBarContentVisible(false);

    chart === "lineChart"
     ? setLineContentVisible(true)
     : setLineContentVisible(false);

    chart === "pieChart"
     ? setPieContentVisible(true)
     : setPieContentVisible(false);
  }, [chart]);


  const handleOnChange = (e) => {
    setChart(e.target.value);
  };
  
  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    chart === "SelecChart"
      ? (result = "seleccione un tipo de gráfica")
      : (result = makeFirstLetterCapital(chart));
    return result;
  };

  return (
    <>
    <div>
      <h1>React con Charts</h1>
      <hr />
      <div>
      <h2>Gráfica: { renderResult() } </h2>
      </div>
      <div>
      <select className="form-select" value={chart} onChange={handleOnChange}>
          <option value="SelecChart">Selecione un tipo de gráfica</option>
          <option value="barChart">BarsChart</option>
          <option value="lineChart">LineChart</option>
          <option value="pieChart">PieChart</option>
        </select>
      </div>
      { barContentVisible && <BarsChart /> }
      { lineContentVisible && <LinesChart /> }
      { pieContentVisible && <PiesChart /> }
    </div>
    </>
  )
}

export default App

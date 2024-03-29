import {Chart, registerables} from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables);

const Mainpage = ({jsonData}) => {

  if(jsonData.Note){
    return <p className="text-sm">{jsonData.Note}</p>
  }

  const labels = Object.keys(jsonData["Monthly Adjusted Time Series"]).reverse();
  console.log(labels);

  const arrayData = Object.values(jsonData["Monthly Adjusted Time Series"]).map(({ "4. close": close }) => close).reverse();
  console.log(arrayData);

  const data = {
    labels: labels,
    datasets: [
      {
        label: jsonData["Meta Data"]["2. Symbol"],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: arrayData
      }
    ]
  }
    return (
        <div className="w-1/2 h-auto">
            <h1 className="text-xl font-medium" >Monthly closes</h1>
            <Line data={data}></Line>
        </div>
    )
}

export default  Mainpage

import axios from 'axios';
import { useState, useEffect } from 'react';
import Mainpage from './components/Mainpage';
import './index.css'

function App() {
  const [main, setData] = useState(null);
  const [ticker, setTicker] = useState('ibm');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function getStockData(ticker) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/${ticker}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getStockData(ticker);
  }, [ticker]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicker(inputValue);
  };

  return (
    <div className="bg-gray-200 p-6 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="mb-6 w-full md:w-2/3 lg:w-1/2 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-full"
        />
        <button type="submit" className="bg-red-600 text-white p-2 rounded-lg ml-2">Submit</button>
      </form>
      <h1 className="text-2xl font-medium">Ticker: {ticker.toUpperCase()}</h1>
      {main && <Mainpage jsonData={main} />}
    </div>
  );



}


export default App;

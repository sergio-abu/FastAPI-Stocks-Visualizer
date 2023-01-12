import axios from 'axios';
import { useState, useEffect } from 'react';
import Mainpage from './components/Mainpage';

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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Ticker: {ticker.toUpperCase()}</h1>
      {main && <Mainpage jsonData={main} />}
    </div>
  );
}

export default App;

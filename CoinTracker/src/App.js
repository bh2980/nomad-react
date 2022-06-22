import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  const onChange = (event) => {
    setInput(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> :  (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${input ? input / coin.quotes.USD.price : coin.quotes.USD.price} {input ? coin.symbol : "USD"}
            </option>
          ))}
        </select>
      )}
      <hr/>
      If you have <input type="number" value={input} onChange={onChange}></input> USD
    </div>
  )
}

export default App;

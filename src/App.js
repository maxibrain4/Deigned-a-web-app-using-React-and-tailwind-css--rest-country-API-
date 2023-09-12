import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";

function App() {
  const [country, setCountry] = useState([]);
  useEffect(function () {
    async function getCountries() {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      console.log(data);
      setCountry(data);
    }
    getCountries();
  }, []);
  return (
    <div>
      <HomePage country={country} />
    </div>
  );
}

export default App;

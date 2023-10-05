import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import Input from "../components/Input";

function CountryPage({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCountries() {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      console.log(data);
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  }

  const getCountryByName = async function (countryName) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const data = await res.json();
    setCountries(data);
    // setIsLoading(false);
  };

  useEffect(function () {
    getCountries();
  }, []);

  return (
    <div className={`h-full ${darkMode ? "lighty" : "darky"}`}>
      <Input darkMode={darkMode} onSearch={getCountryByName} />
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:items-center">
        {/* {isLoading && <h2>Loading.....</h2>} */}
        {countries.map((country) => (
          <CountryCard darkMode={darkMode} countries={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryPage;

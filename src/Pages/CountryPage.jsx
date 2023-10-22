import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const BASE_URL = `https://restcountries.com/v3.1`;
function CountryPage({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function getCountries() {
    try {
      const res = await fetch(`${BASE_URL}/all`);
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      console.log(data);
      setCountries(data);
    } catch (err) {
      setError(err.message);
    }
  }

  const getCountryByName = async function (countryName) {
    try {
      const res = await fetch(`${BASE_URL}/name/${countryName}`);
      if (!res.ok) throw new Error("Country not found!");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    }
    // setIsLoading(false);
  };

  const getCountriesByRegion = async function (regionName) {
    try {
      const res = await fetch(`${BASE_URL}/region/${regionName}`);
      if (!res.ok) throw new Error("Failed.....");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    }
    // setIsLoading(false);
  };

  useEffect(function () {
    getCountries();
  }, []);

  return (
    <div className={`h-full ${darkMode ? "lighty" : "darky"}`}>
      <Input
        darkMode={darkMode}
        onSearch={getCountryByName}
        onSelect={getCountriesByRegion}
      />

      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:items-center">
        {/* {isLoading && <h2>Loading.....</h2>} */}
        {error && <h4>{error}</h4>}
        {!error &&
          countries.map((country) => (
            <Link to={`/country/${country.name.common}`}>
              <CountryCard
                darkMode={darkMode}
                countries={country}
                key={country.latlng}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CountryPage;

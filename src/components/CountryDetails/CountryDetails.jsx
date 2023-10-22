import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const BASE_URL = `https://restcountries.com/v3.1`;

function CountryDetails() {
  const [country, setCountry] = useState([]);
  // const [isLoading, setIsLoading] =
  const [error, setError] = useState("");
  const { countryName } = useParams();
  const getCountryByName = async () => {
    try {
      const res = await fetch(`${BASE_URL}/name/${countryName}`);
      if (!res.ok) throw new Error("Could not found");
      const data = await res.json();
      setCountry(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getCountryByName();
  }, [countryName]);
  return (
    <div className=" my-16">
      <button className="px-8 py-2 shadow-lg">
        <Link to="/">Back</Link>
      </button>
      {country.map((country, index) => (
        <div className=" flex flex-col p-2 md:flex-row">
          <div className="">
            <img src={country.flags.png} alt="" />
          </div>
          <div className="countrydetails">
            <div>
              <h5>Native Name : {country.name.common}</h5>
              <h5>Population : {country.population}</h5>
              <h5>Region : {country.region}</h5>
              <h5>Sub Region: {country.subregion}</h5>
              <h5>Capital : {country.capital}</h5>
            </div>
            <div>
              <h5>Top Level Domain : {country.tld}</h5>
              <h5>Currencies : {country.currencies}</h5>
              <h5>Language : {country.language.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryDetails;

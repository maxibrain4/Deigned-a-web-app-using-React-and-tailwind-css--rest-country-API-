function CountryCard({ darkMode, countries }) {
  return (
    <div className="container mx-auto py-6 lg:p-6">
      <div className=" w-[95%] mx-auto shadow-sm lg:w-[40] lg:mx-0">
        <div>
          <img
            src={countries.flags.png}
            alt=""
            className="w-[100%] lg:h-[200px]"
          />
        </div>
        <div className={`p-2 ${darkMode ? "light" : "dark"}`}>
          <p className="font-bold text-xl py-3">{countries.name.common}</p>
          <p>
            <b>Population:</b>
            {countries.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b>
            {countries.region}
          </p>
          <p>
            <b>Capital:</b>
            {countries.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

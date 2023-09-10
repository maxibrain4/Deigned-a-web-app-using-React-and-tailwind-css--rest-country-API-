import Input from "../components/Input";
function CountryPage({ darkMode }) {
  return (
    <div className={`h-screen ${darkMode ? "lighty" : "darky"}`}>
      <Input />
    </div>
  );
}

export default CountryPage;

import "./App.css";
import { FlagInfo } from "./components/FlagInfo";
import { HBar } from "./components/HBar";
import CountryData from "./data.json";
import { CountryDataI } from "./components/FlagInfo";
import { SearchBar } from "./components/SearchBar";

function App() {
  const countryData: CountryDataI[] = CountryData.map(
    ({ name, region, flags, population, capital }) => ({
      name,
      region,
      flags,
      population,
      capital,
    })
  );


  return (
    <div className="min-h-screen bg-VeryLightGrayLM dark:bg-VeryDarkBlueDM dark:text-white">
      <HBar />
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <SearchBar />
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {countryData.map((x, index) => {
            return <FlagInfo countryData={countryData} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

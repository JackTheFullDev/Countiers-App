
import "./App.css";
import { FlagInfo } from "./components/FlagInfo";
import { HBar } from "./components/HBar";
import CountryData from "./data.json";
import {CountryDataI} from "./components/FlagInfo"

function App() {
 
  const countryData:CountryDataI[]= CountryData.map(({ name, region, flags,population,capital }) => ({ name, region, flags ,population,capital}));


  console.log(countryData)
  return (
    <div className="min-h-screen bg-VeryLightGrayLM dark:bg-VeryDarkBlueDM">
      <HBar/>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-10">
      <FlagInfo countryData={countryData}/> 
      <FlagInfo countryData={countryData}/> 
      <FlagInfo countryData={countryData}/> 
      <FlagInfo countryData={countryData}/> 
      </div>
      
    </div>
  );
}

export default App;

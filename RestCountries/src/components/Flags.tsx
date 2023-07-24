import { FlagInfo } from "./FlagInfo";
import CountryData from "../data.json";
import { CountryDataI } from "../components/FlagInfo";
import { useContext } from "react";
import searchContext from "../context/SearchContext";
export const Flags = () => {
  const countryData: CountryDataI[] = CountryData.map(
    ({ name, region, flags, population, capital }) => ({
      name,
      region,
      flags,
      population,
      capital,
    })
  );
  const contextValue = useContext(searchContext);
  const search = contextValue?.search ?? "";
  const contry = countryData.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {contry.map((x, index) => {
        return <FlagInfo key={index} countryData={contry} index={index} />;
      })}
    </div>
  );
};

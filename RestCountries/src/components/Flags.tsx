import { FlagInfo } from "./FlagInfo";
import CountryData from "../data.json";
import { CountryDataI } from "../components/FlagInfo";
import { useContext } from "react";
import searchContext from "../context/SearchContext";
export const Flags = () => {
  const countryData: CountryDataI[] = CountryData.map(
    ({ name, region, flags, population, capital,nativeName,subregion,languages,topLevelDomain,currencies,borders }) => ({
      name,
      region,
      flags,
      population,
      capital,nativeName,subregion,topLevelDomain,currencies,languages,borders
      
    })
  );
  const contextValue = useContext(searchContext);
  const search = contextValue?.search ?? "";
  const filterCountry=contextValue?.filterByRegion??""
  const contry = countryData.filter((x) => {
    const nameMatch = x.name.toLowerCase().includes(search.toLowerCase());
    const regionMatch = x.region.toLowerCase().includes(filterCountry.toLowerCase());
  
    // Filter by both name and region if both search and filterCountry are not empty
    if (search && filterCountry) {
      return nameMatch && regionMatch;
    }
  
    // Filter by name if search input is not empty and region does not matter
    if (search && !filterCountry) {
      return nameMatch;
    }
  
    // Filter by region if region filter is not empty and search input does not matter
    if (!search && filterCountry) {
      return regionMatch;
    }
  
    // Return true for all elements if both search and filterCountry are empty
    return true;
  });
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {contry.map((x, index) => {
        return <FlagInfo key={index} countryData={contry} index={index} />;
      })}
      
    </div>
  );
};

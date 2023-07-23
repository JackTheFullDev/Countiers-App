export interface CountryDataI {
  name: string;
  region: string;
  flags: { svg: string; png: string };
  population: string;
  capital: string | undefined;
}

export const FlagInfo = ({ countryData }: { countryData: CountryDataI }) => {
  //const test = CountryData.CountryData.map(x=>x.name);
  // console.log(test)
  console.log(countryData[0].flags.svg);

  return (
    <section className="flex flex-col bg-white dark:bg-DarkBlueDM dark:text-white rounded items-center  ">
      <img src={countryData[25].flags.svg} />
      <div className="flex flex-col p-5 w-full  gap-y-5 text-xs">
        <h1>{countryData[0].name} </h1>
        <div>
          <p>Population:{countryData[0].population}</p>
          <p>Region:{countryData[0].region}</p>
          <p>Capital:{countryData[0].capital}</p>
        </div>
      </div>
    </section>
  );
};

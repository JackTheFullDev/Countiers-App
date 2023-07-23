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
      <img src={countryData[1].flags.svg} />
      <div className="flex flex-col p-5 w-full  gap-y-5 text-xs">
        <h1>{countryData[0].name} </h1>
        <div className="font-semibold">
          <p>Population:<span>{countryData[0].population}</span></p>
          <p>Region:<span>{countryData[0].region}</span></p>
          <p>Capital:<span>{countryData[0].capital}</span></p>
        </div>
      </div>
    </section>
  );
};

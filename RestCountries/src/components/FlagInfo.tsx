import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineInfoCircle } from "react-icons/ai";

export interface CountryDataI {
  name: string;
  region: string;
  flags: { svg: string; png: string };
  population: string;
  capital: string | undefined;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
}
interface Currency {
  code: string;
  name: string;
  symbol: string;
}
interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export const FlagInfo = ({
  countryData,
  index,
}: {
  countryData: any;
  index: number;
}) => {
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [selectFlag, setSelectFlag] = useState<number>(0);

  const showFunction = (id: number) => {
    setShowFlag(!showFlag);
    setSelectFlag(id);
  };
  // console.log(countryData[index])
  return (
    <section className="flex flex-col bg-white dark:bg-DarkBlueDM  rounded items-center  ">
      <img
        className="h-48 w-full object-cover"
        src={countryData[index].flags.svg}
      />
      <div className=" flex flex-col p-5 w-full  gap-y-5 text-xs">
        <h1>{countryData[index].name} </h1>
        <div className="font-semibold">
          <p>
            Population:<span>{countryData[index].population}</span>
          </p>
          <p>
            Region:<span>{countryData[index].region}</span>
          </p>
          <p>
            Capital:<span>{countryData[index].capital}</span>
          </p>
        </div>

        <button onClick={() => showFunction(index)}>
          <AiOutlineInfoCircle />
        </button>
        {showFlag && (
          <div className=" bg-white dark:bg-VeryDarkBlueDM flex  fixed items-start  top-0 bottom-0 left-0 right-0  ">
            <div className="mt-32 ml-10 w-full">
              <button
                className="dark:bg-DarkBlueDM bg-VeryLightGrayLM pt-2 pb-2 pl-6 pr-6 gap-1 rounded flex  items-center"
                onClick={() => showFunction(index)}
              >
                <AiOutlineArrowLeft />
                <p>Back</p>
              </button>
              <div className="flex gap-2 mt-5 w-full flex-col sm:flex-row">
                <div className="flex">
                  <img
                    className="h-36 w-80 object-cover"
                    src={countryData[index].flags.svg}
                  />
                </div>
                <div>
                  <h1 className="mb-5">{countryData[index].name} </h1>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex flex-col gap-1">
                      <p>
                        Native Name:<span>{countryData[index].nativeName}</span>
                      </p>
                      <p>
                        Population:<span>{countryData[index].population}</span>
                      </p>
                      <p>
                        Region:<span>{countryData[index].region}</span>
                      </p>
                      <p>
                        Sum Region:<span>{countryData[index].subregion}</span>
                      </p>
                      <p>
                        Capital:<span>{countryData[index].capital}</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>
                        Top Level Domain
                        <span>{countryData[index].topLevelDomain}</span>
                      </p>
                      <p>
                        Currencies:
                        <span>{countryData[index].currencies[0].name}</span>
                      </p>
                      <p>
                        Languages:
                        <span>{countryData[index].languages[0].name}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2 ">
                    <p>Border Countries:</p>
                    <div className="flex gap-2 flex-wrap ">
                      {countryData[index].borders.map((x: any, i: number) => {
                        return <p className="p-1 pl-4 pr-4 dark:bg-DarkBlueDM bg-VeryLightGrayLM rounded " key={i}>{x}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

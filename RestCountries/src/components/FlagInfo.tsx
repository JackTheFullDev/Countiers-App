import { useState } from "react";

export interface CountryDataI {
  name: string;
  region: string;
  flags: { svg: string; png: string };
  population: string;
  capital: string | undefined;
}

export const FlagInfo = ({ countryData,index }: { countryData: any ,index:number}) => {
  const [showFlag,setShowFlag]=useState<boolean>(false);
  const [selectFlag,setSelectFlag]=useState<number>(0);

  const showFunction=(id:number)=>
  {
    setShowFlag(!showFlag);
    setSelectFlag(id);
  }
  return (
    <section className="flex flex-col bg-white dark:bg-DarkBlueDM  rounded items-center  ">
      <img className="h-48 w-full object-cover" src={countryData[index].flags.svg} />
      <div className="  flex flex-col p-5 w-full  gap-y-5 text-xs">
        <h1>{countryData[index].name} </h1>
        <div className="font-semibold">
          <p>Population:<span>{countryData[index].population}</span></p>
          <p>Region:<span>{countryData[index].region}</span></p>
          <p>Capital:<span>{countryData[index].capital}</span></p>
        </div>
    
      <button onClick={()=>showFunction(index)}>hello</button>
     {showFlag &&
      <div className="bg-black absolute h-screen ">
      showed!{index}
    </div>}
      
      </div>
    </section>
  );
};

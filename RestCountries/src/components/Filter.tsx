import { useContext, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import searchContext from "../context/SearchContext";

export const Filter = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };
  
  const fClick=useContext(searchContext);
  const handleClick=fClick?.handleClick;
  return (
    <button
      className="relative flex items-center gap-2 bg-white dark:bg-DarkBlueDM  p-2 rounded"
      onClick={handleFilter}
    >
      <p>Flter by Region</p>
      <AiOutlineArrowDown />
      {showFilter ? (
        <div className="flex flex-col items-start absolute top-10 left-0 w-full bg-inherit rounded p-2">
          <button value="Africa" onClick={handleClick}>
            <p>Africa</p>
          </button>
          <button value="America" onClick={handleClick}>
            <p>America</p>
          </button>
          <button value="Asia" onClick={handleClick}>
            <p>Asia</p>
          </button>
          <button value="Europe" onClick={handleClick}>
            <p>Europe</p>
          </button>
          <button value="Oceania" onClick={handleClick}>
            <p>Oceania</p>
          </button>
          <button value="" onClick={handleClick}>
            <p>Reset</p>
          </button>
        </div>
      ) : null}
    </button>
  );
};

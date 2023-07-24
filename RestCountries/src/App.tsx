import "./App.css";
import { Filter } from "./components/Filter";
import { FlagInfo } from "./components/FlagInfo";
import { Flags } from "./components/Flags";
import { HBar } from "./components/HBar";
import { SearchBar } from "./components/SearchBar";
import searchContext, { SearchProvider } from "./context/SearchContext";
import { useContext } from "react";

function App() {
  return (
    <SearchProvider>
    <div className="min-h-screen bg-VeryLightGrayLM dark:bg-VeryDarkBlueDM dark:text-white">
      <HBar />
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <SearchBar />
          <Filter/>
        </div>
        <Flags/>
      </div>
    </div>
    </SearchProvider>
  );
}

export default App;

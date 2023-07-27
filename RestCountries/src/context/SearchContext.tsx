import {createContext ,ReactNode, useState} from "react"

interface SearchContextValue{
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    search:string|null
    filterByRegion:string|null

}
const searchContext = createContext<SearchContextValue|null>(null);


export const SearchProvider=({children}:{children:ReactNode})=>
{
    const [search,setSearch]=useState<string|null>(null);
    const [filterByRegion,setFilterByRegion]=useState<string|null>(null)
    const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>
    {
        setSearch(e.target.value);
        
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        
        setFilterByRegion(event.currentTarget.value);
        console.log(filterByRegion)
      };

    return(
        <searchContext.Provider value={{handleSearch,search,handleClick,filterByRegion}}>
            {children}
        </searchContext.Provider>
    )
}

export default searchContext;
import {createContext ,ReactNode, useState} from "react"

interface SearchContextValue{
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search:string|null
}
const searchContext = createContext<SearchContextValue|null>(null);


export const SearchProvider=({children}:{children:ReactNode})=>
{
    const [search,setSearch]=useState<string|null>(null);
    const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>
    {
        setSearch(e.target.value);
        
    }

    return(
        <searchContext.Provider value={{handleSearch,search}}>
            {children}
        </searchContext.Provider>
    )
}

export default searchContext;
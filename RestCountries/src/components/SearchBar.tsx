
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext } from 'react';
import searchContext from '../context/SearchContext';
export const SearchBar=()=>
{
    const contextValue = useContext(searchContext);

    // Check if the context value is null before extracting handleSearch
    const handleSearch = contextValue ? contextValue.handleSearch : () => {};
    //const {handleSearch} = useContext(searchContext); warring here
  
    return(
        <section className='flex gap-x-3 items-center  bg-white dark:bg-DarkBlueDM p-1 rounded w-80'>
        <AiOutlineSearch className="ml-1"/>
        <input className='bg-transparent outline-none' placeholder='search for a country' onChange={handleSearch}></input>
        </section>
    )
}
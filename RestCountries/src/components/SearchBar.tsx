
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar=()=>
{
    const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>
    {
        console.log(e.target.value);
    }
    return(
        <section className='flex gap-x-3 items-center  bg-white dark:bg-DarkBlueDM p-1 rounded w-80'>
        <AiOutlineSearch className="ml-1"/>
        <input className='bg-transparent outline-none' placeholder='search for a country' onChange={handleSearch}></input>
        </section>
    )
}
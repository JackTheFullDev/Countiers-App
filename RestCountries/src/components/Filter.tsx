
import { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Filter=()=>
{
    const [showFilter,setShowFilter]=useState<boolean>(false);
    const handleFilter=()=>
    {
        
        setShowFilter(!showFilter);
        
    }
    return(
        <button className="relative flex items-center gap-2 bg-white dark:bg-DarkBlueDM  p-2 rounded" onClick={handleFilter}>
        <p>Flter by Region</p>
        <AiOutlineArrowDown/>
        {showFilter?<div className='flex flex-col items-start absolute top-10 left-0 w-full bg-inherit rounded p-2' >
           <p>Africa</p>
           <p>America</p>
           <p>Asia</p>
           <p>Europa</p>
           <p>Oceania</p>
        </div>:null}
        </button>
    )
}
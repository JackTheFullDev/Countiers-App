
import { FaRegMoon } from 'react-icons/fa';
export const HBar=()=>
{
    return(
        <div className='flex justify-between items-start bg-VeryLightGrayLM h-12'>
            <h1>Where in the world?</h1>
            <div className='flex text-center items-center'>
                <FaRegMoon/>
                <p>Dark MODE</p> 
            </div>
        </div>
    )
    //stworz context tutaj aby wczytaj odpowiednią ikone i tekst czyli dodaj odpowiedniego diva
}
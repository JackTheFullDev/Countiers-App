
import { FaRegMoon } from 'react-icons/fa';
import { ThemeSwitch } from '../context/ThemeSwitch';
export const HBar=()=>
{
    return(
        <div className='flex justify-between font-semibold border-b-2 dark:border-black p-3 items-start bg-VeryLightGrayLM  dark:bg-DarkBlueDM dark:text-White h-13'>
            <h1>Where in the world?</h1>
            <div className='flex text-center items-center gap-2'>
                <FaRegMoon/>
                <ThemeSwitch/>
            </div>
        </div>
    )
    //stworz context tutaj aby wczytaj odpowiednią ikone i tekst czyli dodaj odpowiedniego diva
}
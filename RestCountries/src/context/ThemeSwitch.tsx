import { useEffect, useState } from "react"

export const ThemeSwitch=()=>
{
    const [theme,setTheme]=useState<String>("dark");
    useEffect(()=>
    {
        if(theme==="dark")
        {
            document.documentElement.classList.remove("dark");
        }
        else
        {
            document.documentElement.classList.add("dark");
        }
    })
    const handleButton=()=>
    {
        setTheme(theme==="dark"?"light":"dark");
        console.log("wokrs");
    }
    return(
        <>
        <button onClick={handleButton}>Dark Mode</button>
        </>
    )
}
import { useEffect, useState } from "react"

export const ThemeSwitch=()=>
{
    const [theme,setTheme]=useState<String>("dark");
    useEffect(()=>
    {
        if(theme==="dark")
        {
            document.documentElement.classList.add("dark");
        }
        else
        {
            document.documentElement.classList.remove("dark");
        }
    },[theme])
    const handleButton=()=>
    {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        console.log("wokrs");
    }
    return(
        <>
         <button onClick={handleButton}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
        </>
    )
}
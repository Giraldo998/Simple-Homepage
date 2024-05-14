import { useState } from "react"

export const setMode = () => {
   
   const [darkMode, setDarkMode] = useState(false);
  
   const changeMode = () =>{
     setDarkMode(!darkMode)
     document.body.classList.toggle('dark-mode')
   };
  
   
   return {
      ...darkMode,
      darkMode,
      changeMode
   };
};

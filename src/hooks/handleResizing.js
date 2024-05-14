import { useEffect, useState } from "react"

export const handleResizing = () => {

   const [isMobile, setIsMobile] = useState()
   
   useEffect(() => {

      function handleResize() {
         setIsMobile(window.innerWidth <= 640);
      }
   
      window.addEventListener('resize', handleResize);
      handleResize(); 

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [])
   
   return {
      ...isMobile,
      isMobile
   }
}

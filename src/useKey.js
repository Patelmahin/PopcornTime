import { useEffect } from "react";
export function useKey(key,callback){
    useEffect(function () {
        function Escape(e) {
          if (e.code.toLowerCase() === key.toLowerCase()) {
            callback?.();
            console.log("Closing");
          }
        }
        document.addEventListener("keydown", Escape);
        return function () {
          document.removeEventListener("keydown", Escape)
        }
    
      }, [callback,key])
}
import { createContext, useContext } from "react";

//Crear contexto
export const DarkModeContext = createContext(null);

//Usar contexto
export const useDarkMode = () =>{
    return useContext(DarkModeContext);
}

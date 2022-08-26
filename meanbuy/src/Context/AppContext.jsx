import { Children } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider =({children})=>{
    return(
        <AppContext.Provider>{children}</AppContext.Provider>
    )
}
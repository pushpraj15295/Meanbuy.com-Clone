import { Children, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider =({children})=>{
    const [auth,setAuth] = useState(false)
    const [formData ,setFormData] = useState([])
    return(
        <AppContext.Provider value={{setAuth,auth,formData,setFormData}}>{children}</AppContext.Provider>
    )
}
import { Children, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider =({children})=>{
    const [auth,setAuth] = useState(false)
    const [formData ,setFormData] = useState([])

    const [cardData,setCardData] = useState([]);

    const [card,setCard] = useState(0);
    const AddToCard =()=>{
        setCard(card+1);
    }
    const RemoveToCard =()=>{
        setCard(card-1);
    }
    return(
        <AppContext.Provider value={{setAuth,auth,formData,setFormData,card,AddToCard,RemoveToCard,cardData,setCardData}}>{children}</AppContext.Provider>
    )
}
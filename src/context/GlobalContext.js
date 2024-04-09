import React,{createContext} from "react";
export const Global =createContext()
const GlobalContextProvider =(props)=>{
const std={
    name:'Pradip Uraw',
    age:28

}

    return(
    //    <Global.Provider value={'React js'}>
    <Global.Provider value={std}>
        {props.children}

       </Global.Provider>

    )
}
export default GlobalContextProvider

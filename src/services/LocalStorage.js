import { useEffect, useState } from "react";
import ls from "../services/LocalStorage.js";

const LocalStorageData=ls.get ("newData",{
 
    groguPosition:0,
    gameStatus:"start",
    cookies:0,
    eggs:0,
    frogs:0,
})
const[data, SetData]= useState(LocalStorageData)
const [AllData, SetAllData]= useState([])
const AddData=()=>{
    SetAllData([...AllData, data])
}
useEffect(()=>{
    ls.set({"newData": data})
},[data])

return {data, SetData, AddData, AllData}

export default LocalStorageData;


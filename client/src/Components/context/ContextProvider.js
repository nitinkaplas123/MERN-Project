import React, { useState, createContext } from "react";
import Register from "../Register";

export const adddata = createContext("");
export const updateData = createContext("")
export const dltData = createContext("")
const ContextProvider = ({ children }) => {
    const [udata, setUdata] = useState("");
    const [upData, setUpData] = useState("")
    const [deleteData, setDeleteData] = useState("")

    return (
        <>
            <adddata.Provider value={{ udata, setUdata }}>
                <updateData.Provider value={{ upData, setUpData }}>
                    <dltData.Provider value={{ deleteData, setDeleteData }}>
                        {children}
                    </dltData.Provider>
                </updateData.Provider>
            </adddata.Provider>
        </>
    )
}
export default ContextProvider
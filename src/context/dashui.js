import React, { useRef, useState, useContext, createContext } from 'react'

const DashUi = createContext();

export const useDashUi = () => {
    return useContext(DashUi);
}
export function DashUiProvider({ children }) {

    const onLineSupport = useRef();
    const notification = useRef();
    const smNavShowBtn = useRef()
    const smNavHideBtn = useRef();
    const smNav = useRef()
    const [smToggle, setSmToggle] = useState(false);
    const toggleSupport = () => {
        onLineSupport.current.classList.toggle('hidden')
    }

    return (
        <DashUi.Provider value={{ onLineSupport, notification, toggleSupport, smNavShowBtn, smNavHideBtn, smToggle, setSmToggle,smNav }}>
            {children}
        </DashUi.Provider>
    )
}

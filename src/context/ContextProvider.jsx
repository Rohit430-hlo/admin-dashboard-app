import React, { createContext , useContext , useEffect, useState} from "react";
import { ordersData } from "../data/dummy";

export const stateContext = createContext();

const initialState = {
    cart:false,
    chat:false,
    notification:false,
    userProfile:false
}

export const ContextProvider = ({children})=>{

    const[isClicked , setIsClicked] = useState(initialState)
    const[activeMenu , setActiveMenu] = useState(true)
    const handleClick = (clicked)=>{
        setIsClicked({...initialState , [clicked]:true})
    }
    
    const[screenSize , setScreenSize] = useState(undefined)
    
    useEffect(()=>{
        const handleResize = ()=> setScreenSize(window.innerWidth);
        window.addEventListener('resize' , handleResize)
        handleResize();

        return()=>window.removeEventListener('resize' , handleResize)
    },[])

    
    useEffect(()=>{
        if(screenSize <= 900){
            setActiveMenu(false);
        }else{
            setActiveMenu(true)
        }
    },[screenSize])

    const [currentPage, setCurrentPage] = useState(1);
    
    // useEffect(()=>{
    //     console.log(ordersData.length)
    // })

    const[currentColor , setCurrnetColor]=useState('#03C9D7')
    const[currentMode , setCurrnetMode]=useState('Light')

    const setMode = (e) =>{
        setCurrnetMode(e.target.value)
        localStorage.setItem('themeMode' , e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) =>{
        setCurrnetColor(color)
        localStorage.setItem('colorMode' , color)
        setThemeSettings(false)
    }


    

    const[themeSettings , setThemeSettings] = useState(false)

    const requriedValue = {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentPage,
        setCurrentPage,
        currentColor,
        setCurrnetColor,
        currentMode,
        setCurrnetMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings

    }

    return(
        <stateContext.Provider value={requriedValue}>
            {children}
        </stateContext.Provider>
    )
}
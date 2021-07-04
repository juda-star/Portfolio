import React, { createContext  } from 'react'
import {useContext} from "react"
import Home,{HomeHebrew} from '../../Pages/Home/Home';
 
export const English = {
    Home:Home
};

export const Hebrow={
    Home:HomeHebrew
};
const ContextForInfo=createContext();
export const Provaider=ContextForInfo.Provider;
export function MagicContext() {
    const language = useContext(ContextForInfo);
    return language;
}
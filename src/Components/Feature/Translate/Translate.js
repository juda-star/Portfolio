import React, { createContext  } from 'react'
import {useContext} from "react"
import Home,{HomeHebrew} from '../../Pages/Home/Home';
import Skills,{SkillsHebrew} from '../../Pages/Skills/Skills';
import ContactMe,{ContactMeHebrew} from '../../Pages/ContactMe/ContactMe';
import PortFolio,{PortFolioHebrew} from '../../Pages/Portfolio/Portfolio';
 
export const English = {
    Home:Home,
    PortFolio:PortFolio,
    Skills:Skills,
    ContactMe:ContactMe
};

export const Hebrow={
    Home:HomeHebrew,
    PortFolio:PortFolioHebrew,
    Skills:SkillsHebrew,
    ContactMe:ContactMeHebrew
};


const ContextForInfo=createContext();
export const Provaider=ContextForInfo.Provider;
export const ProvaiderTheme=ContextForInfo.Provider;
export function MagicContext() {
    const language = useContext(ContextForInfo);
    return language;
}
export function ThemeContext() {
    const color = useContext(ContextForInfo);
    return color;
}
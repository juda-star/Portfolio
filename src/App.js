import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from './Components/Feature/Navbar/Navbar';
import SideBar from './Components/Feature/SideBar/SideBar';
import Routing from './Components/Feature/Routing/Routing';
import Header from './Components/Feature/Header/Header';
import Footer from './Components/Feature/Footer/Footer';
import {Provaider} from './Components/Feature/Translate/Translate'
import { Hebrow,English } from './Components/Feature/Translate/Translate';
function App() {
const [language, setLanguage] = useState(English)
function ChangeLanguage() {
  if (language==English) {
    setLanguage(Hebrow)
  }else{

    setLanguage(English)
  }

}
const languageObj = {
  Home:language.Home,
  PortFolio:language.PortFolio,
    Skills:language.Skills,
    ContactMe:language.ContactMe,
  CHngaeButton: ChangeLanguage,

}
  return (
   
    <Provaider value={languageObj} >
      <Routing/>
    </Provaider>
  );
}

export default App;

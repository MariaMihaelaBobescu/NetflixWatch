
import styles from "./App.module.css";
import { useState } from 'react';
import Movies from './components/Movies/Movies';
 import MyList from './components/MyList/MyList';
import TVShows from './components/TVShows/TVShows';
import Content from './components/content/content';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import AppContextProvider from "./components/content/AppContext";
import {App2ContextProvider} from "./components/content/AppContext";

import  {App3ContextProvider} from "./components/content/AppContext"
 import  { App4ContextProvider } from  "./components/content/AppContext"
 import  { App5ContextProvider } from  "./components/content/AppContext"
 import  { App6ContextProvider } from  "./components/content/AppContext"
 import  { App7ContextProvider } from  "./components/content/AppContext"
 import  { App8ContextProvider } from  "./components/content/AppContext"
 import  { App9ContextProvider } from  "./components/content/AppContext"
 import  { App10ContextProvider } from  "./components/content/AppContext"
 import  { App11ContextProvider } from  "./components/content/AppContext"



//  import MyList from './components/MyList/MyList';



function App() {
   const[color, changeColor]= useState("");
  return (

    <div className= {styles.App} style = {{}}>


         

         {/* <React.StrictMode> */}

        <App11ContextProvider>
        <App10ContextProvider>
        <App9ContextProvider>
        <App8ContextProvider>
        <App7ContextProvider>
        <App6ContextProvider>
         <App5ContextProvider>

         <App4ContextProvider>
         
         <App3ContextProvider>

         <App2ContextProvider>
         <AppContextProvider>

         
        
        <BrowserRouter>

        <Navbar/>
        
          <Routes>

         
              <Route exact path="/"   element={  <Content/> }    /> 
             < Route exact path="/tv" element={ <TVShows/> }  />    
           <Route exact path="/movies" element={ <Movies/>  }   />  
           <Route exact path="/myList" element={ <MyList/> }   />  
       
           </Routes>
           </BrowserRouter>
          
    
            </AppContextProvider>
            </App2ContextProvider> 
           </ App3ContextProvider>
           </App4ContextProvider>
           </App5ContextProvider>
           </App6ContextProvider>
           </App7ContextProvider>
           </App8ContextProvider>
           </App9ContextProvider>
           </App10ContextProvider>
           </App11ContextProvider>
           
         {/* </React.StrictMode> */}
        
            

    </div> 

   
  );
}

export default App;

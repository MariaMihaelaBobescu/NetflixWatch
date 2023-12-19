import React, { useEffect, useState } from 'react';
import styles from "./navbar.module.css";
import logo from  "../../Assetss/imaginelogo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

// import {Link} from 'react-scroll';

// import  {handleNavigation} from '@smakss/react-scroll-direction';


// importuri luate din free netflix
// import { Heading , Image } from "@chakra-ui/react";
 import { useNavigate  } from "react-router-dom"

// import React from 'react';

// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";


import {   AppContextProvider  } from  '../content/AppContext';
import {   App2ContextProvider } from  '../content/AppContext';
import {   App3ContextProvider } from  '../content/AppContext';
import {   App4ContextProvider } from  '../content/AppContext';
import {   App5ContextProvider } from  '../content/AppContext';
import {   App6ContextProvider } from  '../content/AppContext';
import {   App7ContextProvider } from  '../content/AppContext';
import {   App8ContextProvider } from  '../content/AppContext';
import {   App9ContextProvider } from  '../content/AppContext';
import {   App10ContextProvider } from  '../content/AppContext';
import {   App11ContextProvider } from  '../content/AppContext';





export default function Navbar( {IsScrolling}) {

// const[ showSearch, setShowSearch] = useState(false);

// const[ Scrolled, SetScrolled]= useState(true);


// const luate din netflix free
const [loginpop,  setloginpop] = useState(false);
const [user, setIsAuthenticated] = useState(false);
const [src, setsrc ] = useState("");


const[fix, setFix ]= useState(false)

  function setFixed(){

     if(window.scrollY ) { 
          setFix(true)
     }  else{  
         setFix(false)

     }
  }
       window.addEventListener("scroll", setFixed)





 useEffect( () =>{

 }
            ,[]);





            // const [y, setY] = useState(window.scrollY);

            // useEffect(() => {
            //   window.addEventListener("scroll", (e) => handleNavigation(e));
            
            //   return () => { // return a cleanup function to unregister our function since it will run multiple times
            //     window.removeEventListener("scroll", (e) => handleNavigation(e));
            //   };
            // }, [y]);






  return (

   // className={ isScrolled ? styles.navScrolled : styles.navbar} style={{background :color}}>

     <nav className={ fix ? styles.navScrolled  : styles.navbar} >

  
         
         
        <img  src={logo} alt="logo" className={styles.logo} />
          


           < div className={fix? styles.navCategoriesScrolled: styles.navCategories}   >

              
              {/* <a  Link  href="/"  > Home </a> 
             <a Link href="/tv"  > TV Shows </a> 
             <a  Link href="/movies"  > Movies </a> 
             <a  Link href="/myList"   > My List </a>    */}


                  <Link to="/">Home</Link>
             <Link to="/tv">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/myList">My List</Link> 

           </div>

           

           {/* <AiOutlineLogout className={styles.singinSingout}/> */}

         <div className={styles.rightSide}> 

      
         <button className={styles.buttonIcon}>  < CiSearch className={styles.searchIcon}/> </button>

          <form className={styles.searchBar}  >
          < input  className={styles.input}
             type="search"
             placeholder="Search"
             id="search"
          />
          </form>

         <button  className={styles.buttonIconn}>  <AiOutlineLogout className={styles.singinSingout}/> </button>


        </div>
         
         


          </nav>

  );
}

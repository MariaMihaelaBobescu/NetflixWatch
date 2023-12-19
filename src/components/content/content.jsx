import React, { useState, useEffect } from 'react'
import styles from "./content.module.css";
import { products, movies} from './products-list';
import Product from './Product';
import avatar from  "../../Assetss/avatar.jpg"
import { Product2 } from './Product';
import { Product3 } from './Product';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

import { FaRegCirclePlay } from "react-icons/fa6";
import play from  "../../Assetss/play.png"



import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import axios from 'axios';


import MyList from '../MyList/MyList';
 import { AppFavoritesContext } from './AppContext';
// import { FavoritesProvider } from './FavoritesContext'
// import { useFavorites } from './FavoritesContext';

// import {useAppContext} from './AppContext';

import { useAppContext } from './AppContext';
import {  useApp2Context} from './AppContext';
import {   useApp3Context } from  './AppContext'


import AppContextProvider  from './AppContext';
  import App2ContextProvider from './AppContext'
  import App3ContextProvider from './AppContext'


export default function Content() {

    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6.5,
          },

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6.5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  const [movies, setMovies] = useState([]);
  const[movies2, setMovies2]= useState([]);
   const[movies3, setMovies3]= useState([]);



      // const dispatch = useDispatch();
  


  //  const MOVIES_BACKEND_URL = "http://localhost:3000/";
  //    const FAV_MOVIES_BACKEND_URL = "http://localhost:3000/myList";
  //        let moviesList = [];
  //       let favMoviesList = [];
  //     let errorMessage;
  //     let loadFavourites = false;

  //     async function getMovies(favs) {
  //       if (favs) { // this is a favourites page
  //           let url ="http://localhost:3000/myList" ;
  //           let res = await fetch(url);
  //           setMovies = await res.json();
  //           setMovies = movies.map(movie => movie.id);
  //           url = "http://localhost:3000/" + movies.join('&id=');
  //           res = await fetch(url);
  //           moviesList = await res.json();
  //           loadFavourites = true;
  //       }
      
  //   }



  
  useEffect(() => {
   
     fetch ( "https://api.themoviedb.org/3/discover/movie?api_key=19be99f0dddf9d8dea25a37e3ab202e3")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setMovies(result.results);
        });
}, []);

  const {favorites, addToFavorites, removeFromFavorites } =useAppContext();

  console.log('favorites', favorites)

  const favoritesChecker = (id) => {

    const boolean = favorites.some((movie)  => movie.id ===id);
            return boolean;
  }




//  const [favorites,  removeFromFavorites ] =  useAppContext;

// const [ favorites, setFavorites] = useState([]);

// const { addToFavorites } = useFavorites();


        //     const addToFavorites = (movie) => {
        //   setFavorites([...favorites, movie]);
        //  return movie; // Return the movie object
        //   };



// const addMovieToMyList = movie =>{
//   useDispatch({type:" ADD_MOVIE_TO_MY_LIST" , payload:movie})
 
// };


// const addMovieToFavorites = (movie) => {
//   addToFavorites(movie);
//  };



 

useEffect(() => {
   
  fetch ( "https://api.themoviedb.org/3/movie/upcoming?api_key=19be99f0dddf9d8dea25a37e3ab202e3")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
         setMovies2(result.results);
     });
}, []);


 const{ favorites2, addToFavorites2, removeFromFavorites2 }= useApp2Context();

 console.log('favorites2', favorites2)

  const favoritesChecker2 = (id) => {

    const boolean = favorites2.some((movie2)  => movie2.id ===id);
            return boolean;
  }



useEffect(() => {
   
  fetch ( "https://api.themoviedb.org/3/trending/all/day?api_key=19be99f0dddf9d8dea25a37e3ab202e3")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
         setMovies3(result.results);
     });
}, []);

const{ favorites3, addToFavorites3, removeFromFavorites3 }= useApp3Context();
console.log('favorites3', favorites3)

  const favoritesChecker3 = (id) => {

    const boolean = favorites3.some((movie3)  => movie3.id ===id);
            return boolean;
  }



  return (

        <div> 



          <div className={styles.backgroundContainer}>  
          
                 <img src={avatar} alt="avatar"  className={styles.avatar}/>
                 <div className={styles.overlay}> 

                    The Way of Water follows the journey of Jake Sully and Neytiri's   
                    newfound family of children. <br/>
                    Despite their best efforts to keep their   
                     family together, a familiar threat resurfaces because Earth is dying,  
                      and forces the Sully family to become refugees and flee to 
                       the land of the Metkayina clan in the Pandoran oceans.     </div>

                    {/* <div className={styles.play}>  <FaRegCirclePlay /> </div> */}

                   
                       <img src={play} alt="play"  className={styles.play}  />
                        <button className={styles.buttonPlay}> play </button>

                               
            

           <h2 className={styles.trend} >  Trending</h2>  </div>



          {/*  1 trending */}
        

            {/* <FavoritesProvider> */}
            {/* < AppContextProvider> */}


               <Carousel responsive={responsive}  className={styles.da}> 
              
                            
                       { 
                    //  products.length > 0 &&

                         movies.map((movie, id) => {

                            return (

                                
                                <Product className={styles.contentDa}

                                  

                                      key={id}

                                        productImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}

                              
                                        productName={movie.title}
                                        // handelsFavorite={() => addToFavorites(movie)}

                                        // handleFavorite={() => addToFavorites(movie)}

                                      

                                          handleFavorite={() => addToFavorites(movie)}

                                       handleFavoriteRemove={() => removeFromFavorites(movie.id)} 
             
                                      
                                     
                                        productDescription={movie.overview}
                            //         productQuantity={product.stock}
                            //         productPrice={product.price}
                            //         selectProductCallback={
                            //             setCurrentProductName
                            //         }
                            //     />
                            // );


                    
                        //  exemplu net

                        // <div className={styles.movieContainer}>

                             
                        //      <img className={styles.movieImage}  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>  
                        //     <h3>   {movie.title}</h3>
                        // </div>

                        // )
                        
                        />
                            
                    
                            )  } ) }    

                               </Carousel>

                               
                               {/* </AppContextProvider> */}
                          
                              {/* </FavoritesProvider> */}

                           
                                    
                               

                      
                    <div> <h2 className={styles.trend} > You might like </h2>  </div>



                        {/* 2 popular */} 
                        
                        <Carousel responsive={responsive} className={styles.da} > 
                            
                            { 
                         //  products.length > 0 &&
     
                              movies2.map((movie2, id) => {
     
                                 return (
                                     <Product2 className={styles.contentDa2}
     
                                       key={id}
     
                                             productImage2={`https://image.tmdb.org/t/p/w500${movie2.backdrop_path}`}
                                             productName2={movie2.title}
     
                                             handleFavorite2={() => addToFavorites2(movie2)}

                                             handleFavoriteRemove2={() => removeFromFavorites2(movie2.id)} 
     
                                 //         productDescription={product.author}
                                 //         productQuantity={product.stock}
                                 //         productPrice={product.price}
                                 //         selectProductCallback={
                                 //             setCurrentProductName
                                 //         }
                                 //     />
                                 // );
     
     
                         
                             //  exemplu net
     
                             // <div className={styles.movieContainer}>
     
                                  
                             //      <img className={styles.movieImage}  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>  
                             //     <h3>   {movie.title}</h3>
                             // </div>
     
                             // )
                             />
                              
                                 )  } ) }   


                                 </Carousel>


                                 {/* 3 */}

                                 <div>  <h2 className={styles.trend } > Popular </h2>  </div>;
                                 

                          
                                 
                                 <Carousel responsive={responsive} className={styles.da}>
                            
                            { 
                         //  products.length > 0 &&
     
                              movies3.map((movie3, index) => {
     
                                 return (
                                     <Product3 className={styles.contentDa2}
     
                                 //          key={index}
     
                                             productImage3={`https://image.tmdb.org/t/p/w500${movie3.backdrop_path}`}
                                             productName3={movie3.title}

                                             handleFavorite3={() => addToFavorites3(movie3)}

                                             handleFavoriteRemove3={() => removeFromFavorites3(movie3.id)} 
     
     
     
                                 //         productDescription={product.author}
                                 //         productQuantity={product.stock}
                                 //         productPrice={product.price}
                                 //         selectProductCallback={
                                 //             setCurrentProductName
                                 //         }
                                 //     />
                                 // );
     
     
                         
                             //  exemplu net
     
                             // <div className={styles.movieContainer}>
     
                                  
                             //      <img className={styles.movieImage}  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>  
                             //     <h3>   {movie.title}</h3>
                             // </div>
     
                             // )
                             />
                              
                                 )  } ) }     

                                 </Carousel>



                          
                           
             
          </div> 
                  

    

    

  )
};



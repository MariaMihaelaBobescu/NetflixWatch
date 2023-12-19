import React from 'react';
 import styles from "./Movies.module.css";
 import { useState, useEffect } from 'react';
 import MoviesProducts from './MoviesProducts';
 import { MoviesProducts2 } from './MoviesProducts';
 import { MoviesProducts3 } from './MoviesProducts';
 import { MoviesProducts4 } from './MoviesProducts';

  import Carousel from "react-multi-carousel";
 import 'react-multi-carousel/lib/styles.css';


 
import {   useApp8Context } from  '../content/AppContext';
import {   useApp9Context } from  '../content/AppContext';
import {   useApp10Context } from  '../content/AppContext';
import {   useApp11Context } from  '../content/AppContext';


import  { Component } from 'react';
import ReactDOM from 'react-dom'; 
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 require("react-responsive-carousel/lib/styles/carousel.min.css")

export default function Movies() {


  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4
  };


  var responsive = {

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

  const[myMovies, setMyMovies]= useState([]);
  const[myMovies2, setMyMovies2]= useState([]);
  const[myMovies3, setMyMovies3]= useState([]);
  const[myMovies4, setMyMovies4]= useState([]);
           
  useEffect(() => {
     
     fetch ( "https://api.themoviedb.org/3/discover/movie?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=36")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setMyMovies(result.results);
        });
  }, []);

  const{ favorites8, addToFavorites8, removeFromFavorites8 }= useApp8Context();

   console.log('favorites8', favorites8)

   const favoritesChecker8 = (id) => {

     const boolean = favorites8.some((movies)  => movies.id ===id);
            return boolean;
     }
  

  useEffect(() => {
     
    fetch ( "https://api.themoviedb.org/3/discover/movie?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=9648")
       .then((res) => res.json())
       .then((result) => {
           console.log(result);
         setMyMovies2(result.results);
       });
 }, []);

 const{ favorites9, addToFavorites9, removeFromFavorites9 }= useApp9Context();

 console.log('favorites9', favorites9)

 const favoritesChecker9 = (id) => {

   const boolean = favorites9.some((movies2)  => movies2.id ===id);
          return boolean;
   }




 useEffect(() => {
     
  fetch ( "https://api.themoviedb.org/3/discover/movie?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=28")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
       setMyMovies3(result.results);
     });
}, []);

const{ favorites10, addToFavorites10, removeFromFavorites10 }= useApp10Context();

 console.log('favorites10', favorites10)

 const favoritesChecker10 = (id) => {

   const boolean = favorites10.some((movies3)  => movies3.id ===id);
          return boolean;
   }





useEffect(() => {
     
  fetch ( "https://api.themoviedb.org/3/discover/movie?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=10752")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
       setMyMovies4(result.results);
     });
}, []);

const{ favorites11, addToFavorites11, removeFromFavorites11 }= useApp11Context();

 console.log('favorites11', favorites11)

 const favoritesChecker11 = (id) => {

   const boolean = favorites11.some((movies4)  => movies4.id ===id);
          return boolean;
   }

 
 



  return (
    <div>

<div>   <h2 className={styles.trend} >  History</h2>  </div>



             {/* <div  className={styles.moviesContent}> */}

             <Carousel  responsive={responsive} className={styles.da} > 

                 
                 { 
              //  products.length > 0 &&

                   myMovies.map((movies, index) => {

                      return (
                          <MoviesProducts className={styles.contentDa2}

                      //          key={index}

                                  MovieImage={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
                                  MovieName={movies.title}

                                  handleFavorite8={() => addToFavorites8(movies)}

                                  handleFavoriteRemove8={() => removeFromFavorites8(movies.id)}


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


       <div>   <h2 className={styles.trend} >  Mystery </h2>  </div>



        {/* <div  className={ styles.moviesContent}> */}
        <Carousel  responsive={responsive} className={styles.da} > 
      
           { 
          //  products.length > 0 &&

        myMovies2.map((movies2, index) => {

           return (
               <MoviesProducts2 className={styles.contentDa2}

           //          key={index}

                       MovieImage2={`https://image.tmdb.org/t/p/w500${movies2.backdrop_path}`}
                       MovieName2={movies2.title}

                       handleFavorite9={() => addToFavorites9(movies2)}

                       handleFavoriteRemove9={() => removeFromFavorites9(movies2.id)}



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


    <div>   <h2 className={styles.trend} >  Action </h2>  </div>



             {/* <div  className={ styles.moviesContent}> */}
             <Carousel  responsive={responsive} className={styles.da} > 

       { 
         //  products.length > 0 &&

        myMovies3.map((movies3, index) => {

           return (
           <MoviesProducts3 className={styles.contentDa2}

//                 key={index}

             MovieImage3={`https://image.tmdb.org/t/p/w500${movies3.backdrop_path}`}
             MovieName3={movies3.title}

             handleFavorite10={() => addToFavorites10(movies3)}

             handleFavoriteRemove10={() => removeFromFavorites10(movies3.id)}


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




         <div>   <h2 className={styles.trend} >  War  </h2>  </div>



             {/* <div  className={ styles.moviesContent}> */}

             <Carousel  responsive={responsive} className={styles.da} > 

        { 
        //  products.length > 0 &&

             myMovies4.map((movies4, index) => {

            return (
        <MoviesProducts4 className={styles.contentDa2}

    //                 key={index}

          MovieImage4={`https://image.tmdb.org/t/p/w500${movies4.backdrop_path}`}
          MovieName4={movies4.title}

          handleFavorite11={() => addToFavorites11(movies4)}

          handleFavoriteRemove11={() => removeFromFavorites11(movies4.id)}



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
  );
}

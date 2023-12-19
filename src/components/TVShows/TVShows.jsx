import React from 'react';
 import styles from "./TVShows.module.css";
 import { useState, useEffect } from 'react';
import TVShowsProducts  from './TVShowsProducts';
import { TVShowsProducts2, } from './TVShowsProducts';
import { TVShowsProducts3 } from './TVShowsProducts';
import { TVShowsProducts4 } from './TVShowsProducts';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


import {   useApp4Context } from  '../content/AppContext';
import {   useApp5Context } from  '../content/AppContext';
import {   useApp6Context } from  '../content/AppContext';
import {   useApp7Context } from  '../content/AppContext';




   

export default function TVShows() {

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

  const[TVs, setTVs]= useState([]);
  const[TVs2, setTVs2]= useState([]);
  const[TVs3, setTVs3]= useState([]);
  const[TVs4, setTVs4]= useState([]);
           
  useEffect(() => {
     
     fetch ( "https://api.themoviedb.org/3/discover/tv?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=99")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setTVs(result.results);
        });
  }, []);


  const{ favorites4, addToFavorites4, removeFromFavorites4 }= useApp4Context();

  console.log('favorites4', favorites4)

  const favoritesChecker4 = (id) => {

    const boolean = favorites4.some((tv)  => tv.id ===id);
            return boolean;
  }


  

  useEffect(() => {
     
    fetch ( "https://api.themoviedb.org/3/discover/tv?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=18")
       .then((res) => res.json())
       .then((result) => {
           console.log(result);
         setTVs2(result.results);
       });
 }, []);

   const{ favorites5, addToFavorites5, removeFromFavorites5 }= useApp5Context();

   console.log('favorites5', favorites5)

   const favoritesChecker5 = (id) => {

     const boolean = favorites5.some((tv2)  => tv2.id ===id);
            return boolean;
     }




 useEffect(() => {
     
  fetch ( "https://api.themoviedb.org/3/discover/tv?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=35")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
       setTVs3(result.results);
     });
}, []);

const{ favorites6, addToFavorites6, removeFromFavorites6 }= useApp6Context();

   console.log('favorites6', favorites6)

   const favoritesChecker6 = (id) => {

     const boolean = favorites6.some((tv3)  => tv3.id ===id);
            return boolean;
     }


useEffect(() => {
     
  fetch ( "https://api.themoviedb.org/3/discover/tv?api_key=19be99f0dddf9d8dea25a37e3ab202e3&with_genres=10759")
     .then((res) => res.json())
     .then((result) => {
         console.log(result);
       setTVs4(result.results);
     });
}, []);

const{ favorites7, addToFavorites7, removeFromFavorites7 }= useApp7Context();

   console.log('favorites7', favorites7)

   const favoritesChecker7 = (id) => {

     const boolean = favorites7.some((tv4)  => tv4.id ===id);
            return boolean;
     }


  

  return (
           <div >

          <div>   <h2 className={styles.trend} >  You might like</h2>  </div>



           {/* <div  className={ styles.tvShowsContent}> */}
           <Carousel  responsive={responsive} className={styles.da}> 

                            
                            { 
                         //  products.length > 0 &&
     
                              TVs.map((tv, id) => {
     
                                 return (
                                     <TVShowsProducts className={styles.contentDa2}
     
                                          key={id}
     
                                             TVImage={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                                             TVName={tv.name}


                                             handleFavorite4={() => addToFavorites4(tv)}

                                             handleFavoriteRemove4={() => removeFromFavorites4(tv.id)}
     
     
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

 
                  <div>   <h2 className={styles.trend} >  Drama </h2>  </div>



                   {/* <div  className={ styles.tvShowsContent}> */}

                   <Carousel  responsive={responsive}  className={styles.da}> 

                 
                      { 
                     //  products.length > 0 &&

                   TVs2.map((tv2, id) => {

                      return (
                          <TVShowsProducts2 className={styles.contentDa2}

                            key={id}

                                  TVImage2={`https://image.tmdb.org/t/p/w500${tv2.backdrop_path}`}
                                  TVName2={tv2.name}

                                  handleFavorite5={() => addToFavorites5(tv2)}

                                  handleFavoriteRemove5={() => removeFromFavorites5(tv2.id)}



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



               <div>   <h2 className={styles.trend} >  Comedy </h2>  </div>



               {/* <div  className={ styles.tvShowsContent}> */}
               <Carousel  responsive={responsive}  className={styles.da}> 


   { 
               //  products.length > 0 &&

                   TVs3.map((tv3, id) => {

                      return (
                      <TVShowsProducts3 className={styles.contentDa2}

                       key={id}

                        TVImage3={`https://image.tmdb.org/t/p/w500${tv3.backdrop_path}`}
                        TVName3={tv3.name}

                        handleFavorite6={() => addToFavorites6(tv3)}

                        handleFavoriteRemove6={() => removeFromFavorites6(tv3.id)}



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



           {/* <div  className={ styles.tvShowsContent}> */}
           <Carousel  responsive={responsive} className={styles.da}> 


     { 
        //  products.length > 0 &&

          TVs4.map((tv4, index) => {

              return (
            <TVShowsProducts4 className={styles.contentDa2}

//                 key={index}

         TVImage4={`https://image.tmdb.org/t/p/w500${tv4.backdrop_path}`}
         TVName4={tv4.name}
       
         handleFavorite7={() => addToFavorites7(tv4)}

         handleFavoriteRemove7={() => removeFromFavorites7(tv4.id)}



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
}

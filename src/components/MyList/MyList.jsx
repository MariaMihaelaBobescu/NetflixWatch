import React from 'react';
import  { useContext } from 'react';
 import styles  from "./MyList.module.css";
 import backgroundList from "../../Assetss/backgroundList.jpg";
 import { CiHeart } from "react-icons/ci";
import Content from '../content/content';


// import { useFavorites } from '../content/FavoritesContext';
//  import { FavoritesProvider } from '../content/FavoritesContext'

  // import {addMovieToFavorites} from '../content/content'
  // import {addToFavorites}   from '../content/content'

  import { useAppContext } from '../content/AppContext';
  import {  useApp2Context} from   '../content/AppContext'
  import {   useApp3Context } from   '../content/AppContext'
  import { useApp4Context } from '../content/AppContext';
  import {  useApp5Context} from   '../content/AppContext'
  import {   useApp6Context } from   '../content/AppContext'
  import {   useApp7Context } from   '../content/AppContext'
  import { useApp8Context } from '../content/AppContext';
  import {  useApp9Context} from   '../content/AppContext'
  import {   useApp10Context } from   '../content/AppContext'
  import {   useApp11Context } from   '../content/AppContext'

  


  // import  {AppContextProvider} from  '../content/AppContext'

  import Product from '../content/Product';

  import {Product2}  from '../content/Product'
  
  import { Product3}  from   '../content/Product'

  import  TVShowsProducts from '../TVShows/TVShowsProducts'
  import  {TVShowsProducts2} from '../TVShows/TVShowsProducts'
  import  {TVShowsProducts3} from '../TVShows/TVShowsProducts'
  import  {TVShowsProducts4} from '../TVShows/TVShowsProducts'

  import   MoviesProducts     from '../Movies/MoviesProducts'
  import  { MoviesProducts2 }   from '../Movies/MoviesProducts'
  import  { MoviesProducts3 }    from '../Movies/MoviesProducts'
  import  { MoviesProducts4 }   from '../Movies/MoviesProducts'






export default function MyList() {



  const {favorites, addToFavorites, removeFromFavorites } =useAppContext();

  console.log('favorites', favorites)


  const favoritesChecker = (id) => {

    const boolean = favorites.some((movie)  => movie.id ===id);
            return boolean;
  }


const{ favorites2, addToFavorites2, removeFromFavorites2 }= useApp2Context();

 console.log('favorites2', favorites2)

  const favoritesChecker2 = (id) => {

    const boolean = favorites2.some((movie2)  => movie2.id ===id);
            return boolean;
  }

const{ favorites3, addToFavorites3, removeFromFavorites3 }= useApp3Context();
console.log('favorites3', favorites3)

  const favoritesChecker3 = (id) => {

    const boolean = favorites3.some((movie3)  => movie3.id ===id);
            return boolean;
  }



  const{ favorites4, addToFavorites4, removeFromFavorites4 }= useApp4Context();

  console.log('favorites4', favorites4)

  const favoritesChecker4 = (id) => {

    const boolean = favorites4.some((tv)  => tv.id ===id);
            return boolean;
  }

  const{ favorites5, addToFavorites5, removeFromFavorites5 }= useApp5Context();

  console.log('favorites5', favorites5)

  const favoritesChecker5 = (id) => {

    const boolean = favorites5.some((tv2)  => tv2.id ===id);
           return boolean;
    }

    const{ favorites6, addToFavorites6, removeFromFavorites6 }= useApp6Context();

    console.log('favorites6', favorites6)
 
    const favoritesChecker6 = (id) => {
 
      const boolean = favorites6.some((tv3)  => tv3.id ===id);
             return boolean;
      }


      const{ favorites7, addToFavorites7, removeFromFavorites7 }= useApp7Context();

      console.log('favorites7', favorites7)
   
      const favoritesChecker7 = (id) => {
   
        const boolean = favorites7.some((tv4)  => tv4.id ===id);
               return boolean;
        }
   

        const{ favorites8, addToFavorites8, removeFromFavorites8 }= useApp8Context();

        console.log('favorites8', favorites8)
     
        const favoritesChecker8 = (id) => {
     
          const boolean = favorites8.some((movies)  => movies.id ===id);
                 return boolean;
          }
       

          const{ favorites9, addToFavorites9, removeFromFavorites9 }= useApp9Context();

          console.log('favorites9', favorites9)
         
          const favoritesChecker9 = (id) => {
         
            const boolean = favorites9.some((movies2)  => movies2.id ===id);
                   return boolean;
            }
         
            const{ favorites10, addToFavorites10, removeFromFavorites10 }= useApp10Context();

            console.log('favorites10', favorites10)
           
            const favoritesChecker10 = (id) => {
           
              const boolean = favorites10.some((movies3)  => movies3.id ===id);
                     return boolean;
              }

              const{ favorites11, addToFavorites11, removeFromFavorites11 }= useApp11Context();

              console.log('favorites11', favorites11)
             
              const favoritesChecker11 = (id) => {
             
                const boolean = favorites11.some((movies4)  => movies4.id ===id);
                       return boolean;
                }
             








  // const { setFavorites} = AppContextProvidert();



 
  // const {  removeFromFavorites, favorites } = useFavorites();

  return (
    <div className={styles.myList}>

      {/* <svg class={styles.icon} viewBox="0 0 20 20">

        
							<path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
						</svg>  

            <svg   class={styles.icon}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
              </svg> */}

             {/* <CiHeart class={styles.icon}  /> */}



             
     
{/*        
        {favorites.map((movie) => (

         <div  key={movie.id} >  

           <div>  <h4 className={styles.title1}>{movie.title} </h4></div>
           <div>  {`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}   </div>
           <div>  <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button> </div>
         
         </div>
        ))}; */}
    




{/* 
       {  favorites.map((movie) => (
           key={movie.id}>
            {movie.title}
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button>
        
        )) ; }  */}


      
       { favorites.map((movie, id) => {

        return (

    
               <Product className={styles.contentDa}

      

          key={id}

            productImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}

  
            productName={movie.title}
            // handelsFavorite={() => addToFavorites(movie)}

            // handleFavorite={() => addToFavorites(movie)}

          

              handleFavorite={() => addToFavorites(movie)}
              handleFavoriteRemove={() => removeFromFavorites(movie.id)} 
             

           ></Product> )})  };


        

                   {  favorites2.map((movie2, id) => {
     
                           return (
                            <Product2 className={styles.contentDa2}
     
                             key={id}
     
                               productImage2={`https://image.tmdb.org/t/p/w500${movie2.backdrop_path}`}
                              productName2={movie2.title}
     
                             handleFavorite2={() => addToFavorites2(movie2)}

                             handleFavoriteRemove2={() => removeFromFavorites2(movie2.id)} 

                             ></Product2> )})  };



{ 
                         //  products.length > 0 &&
     
                              favorites3.map((movie3, index) => {
     
                                 return (
                                     <Product3 className={styles.contentDa2}
     
                                 //          key={index}
     
                                             productImage3={`https://image.tmdb.org/t/p/w500${movie3.backdrop_path}`}
                                             productName3={movie3.title}

                                             handleFavorite3={() => addToFavorites3(movie3)}

                                             handleFavoriteRemove3={() => removeFromFavorites3(movie3.id)} 
     
                                ></Product3>   )})  };


                      { 
                         //  products.length > 0 &&
     
                              favorites4.map((tv, id) => {
     
                                 return (
                                     <TVShowsProducts className={styles.contentDa2}
     
                                          key={id}
     
                                             TVImage={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                                             TVName={tv.name}


                                             handleFavorite4={() => addToFavorites4(tv)}

                                             handleFavoriteRemove4={() => removeFromFavorites4(tv.id)}
     
                                          ></TVShowsProducts>   )})  };


                   { 
                     //  products.length > 0 &&

                   favorites5.map((tv2, id) => {

                      return (
                          <TVShowsProducts2 className={styles.contentDa2}

                            key={id}

                                  TVImage2={`https://image.tmdb.org/t/p/w500${tv2.backdrop_path}`}
                                  TVName2={tv2.name}

                                  handleFavorite5={() => addToFavorites5(tv2)}

                                  handleFavoriteRemove5={() => removeFromFavorites5(tv2.id)}

                                   ></TVShowsProducts2>    )})  };



                  { 
              

                   favorites6.map((tv3, id) => {

                      return (
                      <TVShowsProducts3 className={styles.contentDa2}

                       key={id}

                        TVImage3={`https://image.tmdb.org/t/p/w500${tv3.backdrop_path}`}
                        TVName3={tv3.name}

                        handleFavorite6={() => addToFavorites6(tv3)}

                        handleFavoriteRemove6={() => removeFromFavorites6(tv3.id)}

           ></TVShowsProducts3>            )})  };          

           
              { 

          favorites7.map((tv4, index) => {

              return (
            <TVShowsProducts4 className={styles.contentDa2}

//                 key={index}

         TVImage4={`https://image.tmdb.org/t/p/w500${tv4.backdrop_path}`}
         TVName4={tv4.name}
       
         handleFavorite7={() => addToFavorites7(tv4)}

         handleFavoriteRemove7={() => removeFromFavorites7(tv4.id)}
      ></TVShowsProducts4>      )})  }; 




               { 

                   favorites8.map((movies, index) => {

                      return (
                          <MoviesProducts className={styles.contentDa2}

                      //          key={index}

                                  MovieImage={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
                                  MovieName={movies.title}

                                  handleFavorite8={() => addToFavorites8(movies)}

                                  handleFavoriteRemove8={() => removeFromFavorites8(movies.id)}
 
                                 ></MoviesProducts>      )})  };        


              { 

        favorites9.map((movies2, index) => {

           return (
               <MoviesProducts2 className={styles.contentDa2}

           //          key={index}

                       MovieImage2={`https://image.tmdb.org/t/p/w500${movies2.backdrop_path}`}
                       MovieName2={movies2.title}

                       handleFavorite9={() => addToFavorites9(movies2)}

                       handleFavoriteRemove9={() => removeFromFavorites9(movies2.id)}
                   ></MoviesProducts2>    )})  }; 



{ 

        favorites10.map((movies3, index) => {

           return (
           <MoviesProducts3 className={styles.contentDa2}

//                 key={index}

             MovieImage3={`https://image.tmdb.org/t/p/w500${movies3.backdrop_path}`}
             MovieName3={movies3.title}

             handleFavorite10={() => addToFavorites10(movies3)}

             handleFavoriteRemove10={() => removeFromFavorites10(movies3.id)}

           ></MoviesProducts3>      )})  };


  
            { 

             favorites11.map((movies4, index) => {

            return (
        <MoviesProducts4 className={styles.contentDa2}

    //                 key={index}

          MovieImage4={`https://image.tmdb.org/t/p/w500${movies4.backdrop_path}`}
          MovieName4={movies4.title}

          handleFavorite11={() => addToFavorites11(movies4)}

          handleFavoriteRemove11={() => removeFromFavorites11(movies4.id)}

              ></MoviesProducts4>     )})  };









   </div>






              )
          }

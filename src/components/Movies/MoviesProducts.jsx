import React from 'react';
import styles from './MoviesProducts.module.css';
import { useState } from "react";

import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi"


import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';



export default function MoviesProducts(props) {

    const [isHovered, setIsHovered] = useState(false);


  return (
    
          <div className={styles.productContainer}  onMouseEnter={() => setIsHovered(true)}
                                                     onMouseLeave={() => setIsHovered(false)}>

       <img className={styles.productImage} src={props.MovieImage} />
 
        {isHovered && (

            <div className={styles.hover}>
          <img className={styles.productImage} src={props.MovieImage} />

          <div className={styles.infoContainer}> 

         <h4 className={styles.productName}>{props.MovieName}</h4>
         <div className={styles.iconsHover}>

         <div className={styles.icons}>


                      <RiThumbUpFill  onClick={() =>{
                        
                        const result8 =   props.handleFavorite8();
                             console.log("uite", result8 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result88 =   props.handleFavoriteRemove8();
                             console.log("uite1", result88 )
                         
                         }}> 
                         
                          </RiThumbDownFill > 





                {/* <IoPlayCircleSharp
                    // title="Play"
                     // onClick={() => navigate("/player")}
                    />
                    <RiThumbUpFill title="Like" />
                
                    <RiThumbDownFill title="Dislike" /> */}
                    {/* {isLiked ? (
                     <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                     />
                    ) : (
                      <AiOutlinePlus title="Add to my list" onClick={addToList} />
                    )} */}
            
                        <BiChevronDown title="More Info" />
                        
                      </div>

            
                      <div className={styles.genres}>
                     {/* <ul >
                      {movieData.genres.map((genre) => (
                     <li>{genre}</li>
                      ))}
                      </ul> */}
                      </div>

                      </div>

            </div>

           {/* <p className={styles.productDescription}>

                  {props.productDescription}
                   </p> */}

          </div>

        )}

        </div>
  )
};


export  function MoviesProducts2 (props) {
    // const { name, setName } = useContext(NameContext);
    const [isHovered, setIsHovered] = useState(false);


    return (
         
  
              <div className={styles.productContainer}  onMouseEnter={() => setIsHovered(true)}
                                                   onMouseLeave={() => setIsHovered(false)}>


            <img className={styles.productImage} src={props.MovieImage2} />

            {isHovered && (

            <div className={styles.hover}>

              < img className={styles.productImage} src={props.MovieImage2} />

              <div className={styles.infoContainer}> 

            <h4 className={styles.productName}>{props.MovieName2}</h4>

            <div className={styles.iconsHover}>
            <div className={styles.icons}>



   
                      <RiThumbUpFill  onClick={() =>{
                        
                        const result9 =   props.handleFavorite9();
                             console.log("uite", result9 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result99 =   props.handleFavoriteRemove9();
                             console.log("uite1", result99 )
                         
                         }}> 
                         
                          </RiThumbDownFill >  



    
{/* <                 IoPlayCircleSharp
                    // title="Play"
                     // onClick={() => navigate("/player")}
                    />
                    <RiThumbUpFill title="Like" />
                
                    <RiThumbDownFill title="Dislike" /> */}
                    {/* {isLiked ? (
                     <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                     />
                    ) : (
                      <AiOutlinePlus title="Add to my list" onClick={addToList} />
                    )} */}



                          <BiChevronDown title="More Info" />
                          </div>

                          <div className={styles.genres}>
                     {/* <ul >
                      {movieData.genres.map((genre) => (
                     <li>{genre}</li>
                      ))}
                      </ul> */}
                      </div>

                      </div>
                     </div> 


             {/* <p className={styles.productDescription}>

                     {props.productDescription}
                           </p> */}
                           
          </div>

            )}

              </div>
    )};


    export  function MoviesProducts3 (props) {
        // const { name, setName } = useContext(NameContext);
        const [isHovered, setIsHovered] = useState(false);

    
        return (
             
      
                  <div className={styles.productContainer} onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
    
                <img className={styles.productImage} src={props.MovieImage3} />

                {isHovered && (

              <div className={styles.hover}>

            <img className={styles.productImage} src={props.MovieImage3} />
            <div className={styles.infoContainer}> 
    
                <h4 className={styles.productName}>{props.MovieName3}</h4>

                <div className={styles.iconsHover}>
               <div className={styles.icons}>


                <RiThumbUpFill  onClick={() =>{
                        
                        const result10 =   props.handleFavorite10();
                             console.log("uite", result10 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result1010 =   props.handleFavoriteRemove10();
                             console.log("uite1", result1010 )
                         
                         }}> 
                         
                          </RiThumbDownFill >
    
    
{/*     
                  <IoPlayCircleSharp
                    // title="Play"
                     // onClick={() => navigate("/player")}
                    />
                    <RiThumbUpFill title="Like" />
                
                    <RiThumbDownFill title="Dislike" /> */}
                    {/* {isLiked ? (
                     <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                     />
                    ) : (
                      <AiOutlinePlus title="Add to my list" onClick={addToList} />
                    )} */}



                          <BiChevronDown title="More Info" />
                          </div>

                          <div className={styles.genres}>
                     {/* <ul >
                      {movieData.genres.map((genre) => (
                     <li>{genre}</li>
                      ))}
                      </ul> */}
                      </div>

                      </div>
                     </div>    
    
             {/* <p className={styles.productDescription}>
    
             {props.productDescription}
                </p> */}
                    
                    </div>
                   )}


              </div>
        )};



        export  function MoviesProducts4 (props) {
            // const { name, setName } = useContext(NameContext);
            const [isHovered, setIsHovered] = useState(false);

        
            return (
                 
          
                <div className={styles.productContainer}  onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}>
        
      
        
                <img className={styles.productImage} src={props.MovieImage4} />

                {isHovered && (

               <div className={styles.hover}>
        
               <img className={styles.productImage} src={props.MovieImage4} />
               <div className={styles.infoContainer}> 

                 <h4 className={styles.productName}>{props.MovieName4}</h4>

                 <div className={styles.iconsHover}>
                  <div className={styles.icons}>


        
                     <RiThumbUpFill  onClick={() =>{
                        
                        const result11 =   props.handleFavorite11();
                             console.log("uite", result11 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result1111 =   props.handleFavoriteRemove11();
                             console.log("uite1", result1111 )
                         
                         }}> 
                         
                          </RiThumbDownFill >  



                   {/* <IoPlayCircleSharp
                    // title="Play"
                     // onClick={() => navigate("/player")}
                    />
                    <RiThumbUpFill title="Like" />
                
                    <RiThumbDownFill title="Dislike" /> */}
                    {/* {isLiked ? (
                     <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                     />
                    ) : (
                      <AiOutlinePlus title="Add to my list" onClick={addToList} />
                    )} */}



                          <BiChevronDown title="More Info" />
                          </div>

                          <div className={styles.genres}>
                     {/* <ul >
                      {movieData.genres.map((genre) => (
                     <li>{genre}</li>
                      ))}
                      </ul> */}
                      </div>

                      </div>
                     </div>
        
        
        {/* <p className={styles.productDescription}>
        
        {props.productDescription}
        </p> */}
       
                  </div>
 )}

</div>
        
            )};
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { NameContext } from "../../context/name-context";
import styles from  "./Product.module.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi";


import {addToFavorites} from "./content";


import { useAppContext } from './AppContext';




export default function Product(props) {
    const { name, setName } = useContext(NameContext);
 
   const [isHovered, setIsHovered] = useState(false);

    const { addToFavorites, removeFromFavorites } = useAppContext();



  // const { favorites, setFavorites} = useState([]);

  // const  addToFavorites = () => {
  //            setFavorites([...favorites, props.movie])  
     
  // };


    return (
         
  
          
   <div className={styles.productContainer}   onMouseEnter={() => setIsHovered(true)}
                                                     onMouseLeave={() => setIsHovered(false)} >



            <img className={styles.productImage} src={props.productImage} />


        {isHovered && (

            <div className={styles.hover}>


           <div className={styles.imageContainerHover} >  <img  className={styles.imageHover}  src={props.productImage} />  </div>

               
           <div className={styles.infoContainer}> 
               
               <h4 className={styles.productName}>{props.productName}</h4>

               <div className={styles.iconsHover}>

                    <div className={styles.icons}>
                   {/* <button onClick ={ () => props.handelsFavorite(movie)}>Add to Favorites</button>  */}

                   {/* <button onClick={props.handelsFavorite }>Add to Favorites</button> */}
                         
                                     {/* <button
                                    onClick={() => {
                                  const result = props.handelsFavorite();
                              console.log("Add to Favorites button clicked. Result:", result);
                                           }}
                                        >
                                         Add to Favorites
                                          </button> */}


                           <RiThumbUpFill  onClick={() =>{
                        
                        const result =   props.handleFavorite();
                             console.log("uite", result )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result1 =   props.handleFavoriteRemove();
                             console.log("uite1", result1 )
                         
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


              <p className={styles.productDescription}>

                {props.productDescription}
            </p> 
       
            </div>

              
            
                )}
  </div>
           )
        }      ;

     
           





export  function Product2(props) {
    // const { name, setName } = useContext(NameContext);


    const [isHovered, setIsHovered] = useState(false);

    const responsive = {

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
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


    return (
         
  
              <div className={styles.productContainer}     onMouseEnter={() => setIsHovered(true)}
                                                            onMouseLeave={() => setIsHovered(false)} >


            <img className={styles.productImage} src={props.productImage2} />


        {isHovered && (

              <div className={styles.hover}>

                 <img  className={styles.imageHover}  src={props.productImage2} />  


                 <div className={styles.infoContainer}> 

                 <h4 className={styles.productName}>{props.productName2}</h4>

                 <div className={styles.iconsHover}>

                 <div className={styles.icons}>



                 <RiThumbUpFill  onClick={() =>{
                        
                   const result2 =   props.handleFavorite2();
                             console.log("uite2", result2 )
                         
                   }}>  favorite </RiThumbUpFill>



                     <RiThumbDownFill onClick={() =>{
                        
                    const result22 =   props.handleFavoriteRemove2();
                       console.log("uite22", result22 )
                         
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






    
    export  function Product3(props) {
        // const { name, setName } = useContext(NameContext);

        const [isHovered, setIsHovered] = useState(false);


        const responsive = {

            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
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
    
        return (
             
      
                  <div className={styles.productContainer}    onMouseEnter={() => setIsHovered(true)}
                                                              onMouseLeave={() => setIsHovered(false)}>
    
    
    
                <img className={styles.productImage} src={props.productImage3} />
    
                {isHovered && (
    
                       <div className={styles.hover}>

                       <img  className={styles.imageHover}  src={props.productImage3} />

                       <div className={styles.infoContainer}> 
                       <h4 className={styles.productName}>{props.productName3}</h4>
    
                       <div className={styles.iconsHover}>
    
                       <div className={styles.icons}>


                       <RiThumbUpFill  onClick={() =>{
                        
                        const result3 =   props.handleFavorite3();
                                  console.log("uite3", result3 )
                              
                        }}>  favorite </RiThumbUpFill>
     
     
     
                          <RiThumbDownFill onClick={() =>{
                             
                         const result33 =   props.handleFavoriteRemove3();
                            console.log("uite33", result33 )
                              
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
    {/*  
    
    <p className={`${styles.productPrice}`}>
    {props.productPrice} RON , for you {name}
    <span
    className={
    props.productQuantity
        ? styles.productInStock
        : styles.productOutOfStock
    }
    >
    {props.productQuantity ? "In Stoc" : "Stoc Epuizat"}
    </span>
    </p>
    {props.productQuantity > 0 ? (
    <a
    onClick={() => {
    props.selectProductCallback(props.productName);
    }}
    className={styles.productAddToCart}
    href="#"
    >
    Add to cart
    </a>
    ) : (
    <a className={styles.productNotification} href="#">
    Notify me
    </a>
    )} */}
              </div>
    
      
                   )}
    
              </div>
        )};
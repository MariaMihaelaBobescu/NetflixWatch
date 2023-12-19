import React from 'react';
import { useState } from "react";

import styles from './TVShowsProducts.module.css';

import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi"

export default function TVShowsProducts(props) {
 
    const [isHovered, setIsHovered] = useState(false);



  return (
    
          <div className={styles.productContainer}  onMouseEnter={() => setIsHovered(true)}
                                                     onMouseLeave={() => setIsHovered(false)}>



       <img className={styles.productImage} src={props.TVImage} />

             {isHovered && (

            <div className={styles.hover}>

            <img  className={styles.imageHover}  src={props.TVImage} />


            <div className={styles.infoContainer}> 

             <h4 className={styles.productName}>{props.TVName}</h4>

             <div className={styles.iconsHover}>

             <div className={styles.icons}>




              <RiThumbUpFill  onClick={() =>{
                        
                        const result4 =   props.handleFavorite4();
                             console.log("uite", result4 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result44 =   props.handleFavoriteRemove4();
                             console.log("uite1", result44 )
                         
                         }}>  remove favorite </RiThumbDownFill > 




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






export  function TVShowsProducts2 (props) {
    // const { name, setName } = useContext(NameContext);
    const [isHovered, setIsHovered] = useState(false);


    return (
         
  
              <div className={styles.productContainer}  onMouseEnter={() => setIsHovered(true)}
                                                         onMouseLeave={() => setIsHovered(false)}>



            <img className={styles.productImage} src={props.TVImage2} />

            {isHovered && (

            <div className={styles.hover}>
           <img className={styles.productImage} src={props.TVImage2} />

           <div className={styles.infoContainer}> 

            <h4 className={styles.productName}>{props.TVName2}</h4>

            <div className={styles.iconsHover}>
            <div className={styles.icons}>




                         <RiThumbUpFill  onClick={() =>{
                        
                        const result5 =   props.handleFavorite5();
                             console.log("uite", result5 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result55 =   props.handleFavoriteRemove5();
                             console.log("uite1", result55 )
                         
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



    export  function TVShowsProducts3 (props) {
        // const { name, setName } = useContext(NameContext);

        const [isHovered, setIsHovered] = useState(false);
    
        return (
             
      
                  <div className={styles.productContainer}   onMouseEnter={() => setIsHovered(true)}
                                                             onMouseLeave={() => setIsHovered(false)} >
    
    
    
                <img className={styles.productImage} src={props.TVImage3} />

                        {isHovered && (

                      <div className={styles.hover}>
                     
                     <img className={styles.productImage} src={props.TVImage3} />

                     <div className={styles.infoContainer}> 
    
                     <h4 className={styles.productName}>{props.TVName3}</h4>

                     <div className={styles.iconsHover}>
                     <div className={styles.icons}>




 
                     <RiThumbUpFill  onClick={() =>{
                        
                        const result6 =   props.handleFavorite6();
                             console.log("uite", result6 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result66 =   props.handleFavoriteRemove6();
                             console.log("uite1", result66 )
                         
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
                      </p>  */}

    
              </div>


                        )}
        </div>
    
        )};



        export  function TVShowsProducts4 (props) {
            // const { name, setName } = useContext(NameContext);

            const [isHovered, setIsHovered] = useState(false);

        
            return (
                 
          
                      <div className={styles.productContainer}    onMouseEnter={() => setIsHovered(true)}
                                                                  onMouseLeave={() => setIsHovered(false)}>
        
        
        
                    <img className={styles.productImage} src={props.TVImage4} />

                    {isHovered && (

                   <div className={styles.hover}>

                   <img className={styles.productImage} src={props.TVImage4} />

                   <div className={styles.infoContainer}> 
        
                    <h4 className={styles.productName}>{props.TVName4}</h4>

                    <div className={styles.iconsHover}>
                    <div className={styles.icons}>





                    <RiThumbUpFill  onClick={() =>{
                        
                        const result7 =   props.handleFavorite7();
                             console.log("uite", result7 )
                         
                         }}>  favorite </RiThumbUpFill>



                           <RiThumbDownFill onClick={() =>{
                        
                        const result77 =   props.handleFavoriteRemove7();
                             console.log("uite1", result77 )
                         
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
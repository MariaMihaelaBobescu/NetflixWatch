
import React, { createContext, useContext, useState } from 'react';


const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  
//   if (!context ===undefined) {
//     throw new Error('AppContext must be used within a AppContextProvider');
//   }
//   return context;
// };

             if (!context) {
            throw new Error('useAppContext must be used within an AppContextProvider');
              }
               return context;
              };


 const AppContextProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);



  // const addToFavorites = (movie) => {
  //      const oldFavorites=[...favorites];
  //      const newFavorites= oldFavorites.concat(movie);
  //      setFavorites(newFavorites);
    
  // };

     const addToFavorites = (movie) => {
  setFavorites([...favorites, movie]);
  return movie; // Return the movie object
};

  // const addToFavorites = (movie) => {
  //   setFavorites((prevFavorites) => [...prevFavorites, movie]);
  // };



  // const removeFromFavorites = (movieId) => {
  //   const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  //   setFavorites(updatedFavorites);
  // };

  const removeFromFavorites = (movieId) => { 
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
  };


  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </AppContext.Provider>
  );
    };

export default AppContextProvider;





// const App2Context = createContext(null);

// export const useApp2Context = () => {
//   const context = useContext(App2Context);
  
// //   if (!context ===undefined) {
// //     throw new Error('AppContext must be used within a AppContextProvider');
// //   }
// //   return context;
// // };

//              if (!context) {
//             throw new Error('useAppContext must be used within an AppContextProvider');
//               }
//                return context;
//               };


//  const App2ContextProvider = ({ children }) => {

//   const [favorites2, setFavorites2] = useState([]);



//   // const addToFavorites = (movie) => {
//   //      const oldFavorites=[...favorites];
//   //      const newFavorites= oldFavorites.concat(movie);
//   //      setFavorites(newFavorites);
    
//   // };

//      const addToFavorites2 = (movie2) => {
//   setFavorites2([...favorites2, movie2]);
//   return movie2; // Return the movie object
// };

//   // const addToFavorites = (movie) => {
//   //   setFavorites((prevFavorites) => [...prevFavorites, movie]);
//   // };



//   // const removeFromFavorites = (movieId) => {
//   //   const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
//   //   setFavorites(updatedFavorites);
//   // };

//   const removeFromFavorites2 = (movie2Id) => {
//     const updatedFavorites2 = favorites2.filter((movie2) => movie2.id !== movie2Id);
//     setFavorites2(updatedFavorites2);
//   };


//   return (
//     <App2Context.Provider value={{ favorites2, addToFavorites2, removeFromFavorites2 }}>
//       {children}
//     </App2Context.Provider>
//   );


//    };

// export { App2ContextProvider };

const App2Context = createContext(null);

export const useApp2Context = () => {
  const context = useContext(App2Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App2ContextProvider = ({ children }) => {
  const [favorites2, setFavorites2] = useState([]);

  const addToFavorites2 = (movie2) => {
    setFavorites2([...favorites2, movie2]);
    return movie2; // Return the movie object
  };

  const removeFromFavorites2 = (movie2Id) => {
    const updatedFavorites2 = favorites2.filter((movie2) => movie2.id !== movie2Id);
    setFavorites2(updatedFavorites2);
  };

  return (
    <App2Context.Provider value={{ favorites2, addToFavorites2, removeFromFavorites2 }}>
      {children}
    </App2Context.Provider>
  );
};

export { App2ContextProvider };



//  3

const App3Context = createContext(null);

export const useApp3Context = () => {
  const context = useContext(App3Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App3ContextProvider = ({ children }) => {
  const [favorites3, setFavorites3] = useState([]);

  const addToFavorites3 = (movie3) => {
    setFavorites3([...favorites3, movie3]);
    return movie3; // Return the movie object
  };

  const removeFromFavorites3 = (movie3Id) => {
    const updatedFavorites3 = favorites3.filter((movie3) => movie3.id !== movie3Id);
    setFavorites3(updatedFavorites3);
  };

  return (
    <App3Context.Provider value={{ favorites3, addToFavorites3, removeFromFavorites3 }}>
      {children}
    </App3Context.Provider>
  );
};

export { App3ContextProvider };

// 4- tv 1


const App4Context = createContext(null);

export const useApp4Context = () => {
  const context = useContext(App4Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App4ContextProvider = ({ children }) => {
  const [favorites4, setFavorites4] = useState([]);

  const addToFavorites4 = (tv) => {
    setFavorites4([...favorites4, tv]);
    return tv; // Return the movie object
  };

  const removeFromFavorites4 = (tvId) => {
    const updatedFavorites4 = favorites4.filter((tv) => tv.id !== tvId);
    setFavorites4(updatedFavorites4);
  };

  return (
    <App4Context.Provider value={{ favorites4, addToFavorites4, removeFromFavorites4 }}>
      {children}
    </App4Context.Provider>
  );
};

export { App4ContextProvider };


// 5- tv product 2


const App5Context = createContext(null);

export const useApp5Context = () => {
  const context = useContext(App5Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App5ContextProvider = ({ children }) => {
  const [favorites5, setFavorites5] = useState([]);

  const addToFavorites5 = (tv2) => {
    setFavorites5([...favorites5, tv2]);
    return tv2; // Return the movie object
  };

  const removeFromFavorites5 = (tv2Id) => {
    const updatedFavorites5 = favorites5.filter((tv2) => tv2.id !== tv2Id);
    setFavorites5(updatedFavorites5);
  };

  return (
    <App5Context.Provider value={{ favorites5, addToFavorites5, removeFromFavorites5 }}>
      {children}
    </App5Context.Provider>
  );
};

export { App5ContextProvider };

// 6- tv product 3


const App6Context = createContext(null);

export const useApp6Context = () => {
  const context = useContext(App6Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App6ContextProvider = ({ children }) => {
  const [favorites6, setFavorites6] = useState([]);

  const addToFavorites6 = (tv3) => {
    setFavorites6([...favorites6, tv3]);
    return tv3; // Return the movie object
  };

  const removeFromFavorites6 = (tv3Id) => {
    const updatedFavorites6 = favorites6.filter((tv3) => tv3.id !== tv3Id);
    setFavorites6(updatedFavorites6);
  };

  return (
    <App6Context.Provider value={{ favorites6, addToFavorites6, removeFromFavorites6 }}>
      {children}
    </App6Context.Provider>
  );
};

export { App6ContextProvider };



// 7- tv product 4


const App7Context = createContext(null);

export const useApp7Context = () => {
  const context = useContext(App7Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App7ContextProvider = ({ children }) => {
  const [favorites7, setFavorites7] = useState([]);

  const addToFavorites7 = (tv4) => {
    setFavorites7([...favorites7, tv4]);
    return tv4; // Return the movie object
  };

  const removeFromFavorites7 = (tv4Id) => {
    const updatedFavorites7 = favorites7.filter((tv4) => tv4.id !== tv4Id);
    setFavorites7(updatedFavorites7);
  };

  return (
    <App7Context.Provider value={{ favorites7, addToFavorites7, removeFromFavorites7 }}>
      {children}
    </App7Context.Provider>
  );
};

export { App7ContextProvider };




// 8- movie product 1


const App8Context = createContext(null);

export const useApp8Context = () => {
  const context = useContext(App8Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App8ContextProvider = ({ children }) => {
  const [favorites8, setFavorites8] = useState([]);

  const addToFavorites8 = (movies) => {
    setFavorites8([...favorites8, movies]);
    return movies; // Return the movie object
  };

  const removeFromFavorites8 = (moviesId) => {
    const updatedFavorites8 = favorites8.filter((movies) => movies.id !== moviesId);
    setFavorites8(updatedFavorites8);
  };

  return (
    <App8Context.Provider value={{ favorites8, addToFavorites8, removeFromFavorites8 }}>
      {children}
    </App8Context.Provider>
  );
};

export { App8ContextProvider };


//  9- movie product 2


const App9Context = createContext(null);

export const useApp9Context = () => {
  const context = useContext(App9Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App9ContextProvider = ({ children }) => {
  const [favorites9, setFavorites9] = useState([]);

  const addToFavorites9 = (movies2) => {
    setFavorites9([...favorites9, movies2]);
    return movies2; // Return the movie object
  };

  const removeFromFavorites9 = (movies2Id) => {
    const updatedFavorites9 = favorites9.filter((movies2) => movies2.id !== movies2Id);
    setFavorites9(updatedFavorites9);
  };

  return (
    <App9Context.Provider value={{ favorites9, addToFavorites9, removeFromFavorites9 }}>
      {children}
    </App9Context.Provider>
  );
};

export { App9ContextProvider };




//  10- movie product 3


const App10Context = createContext(null);

export const useApp10Context = () => {
  const context = useContext(App10Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App10ContextProvider = ({ children }) => {
  const [favorites10, setFavorites10] = useState([]);

  const addToFavorites10 = (movies3) => {
    setFavorites10([...favorites10, movies3]);
    return movies3; // Return the movie object
  };

  const removeFromFavorites10 = (movies3Id) => {
    const updatedFavorites10 = favorites10.filter((movies3) => movies3.id !== movies3Id);
    setFavorites10(updatedFavorites10);
  };

  return (
    <App10Context.Provider value={{ favorites10, addToFavorites10, removeFromFavorites10 }}>
      {children}
    </App10Context.Provider>
  );
};

export { App10ContextProvider };




//  11- movie product 4


const App11Context = createContext(null);

export const useApp11Context = () => {
  const context = useContext(App11Context);

  if (!context) {
    throw new Error('useApp2Context must be used within an App2ContextProvider');
  }

  return context;
};

const App11ContextProvider = ({ children }) => {
  const [favorites11, setFavorites11] = useState([]);

  const addToFavorites11 = (movies4) => {
    setFavorites11([...favorites11, movies4]);
    return movies4; // Return the movie object
  };

  const removeFromFavorites11 = (movies4Id) => {
    const updatedFavorites11 = favorites11.filter((movies4) => movies4.id !== movies4Id);
    setFavorites11(updatedFavorites11);
  };

  return (
    <App11Context.Provider value={{ favorites11, addToFavorites11, removeFromFavorites11 }}>
      {children}
    </App11Context.Provider>
  );
};

export { App11ContextProvider };


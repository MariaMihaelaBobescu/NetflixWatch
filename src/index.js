import React from 'react';
 import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  import ReactDOM from 'react-dom';

 import AppContextProvider from "./components/content/AppContext";
  import {App2ContextProvider} from  "./components/content/AppContext"
    import  {App3ContextProvider} from  "./components/content/AppContext"
    import  {App4ContextProvider} from  "./components/content/AppContext"
    import  {App5ContextProvider} from  "./components/content/AppContext"
    import  {App6ContextProvider} from  "./components/content/AppContext"
    import  {App7ContextProvider} from  "./components/content/AppContext"
    import  {App8ContextProvider} from  "./components/content/AppContext"
    import  {App9ContextProvider} from  "./components/content/AppContext"
    import  {App10ContextProvider} from  "./components/content/AppContext"
    import  {App11ContextProvider} from  "./components/content/AppContext"



     import { useAppContext } from './components/content/AppContext';

    //  import { BrowserRouter } from 'react-router-dom';


         const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(


    //    <React.StrictMode>
        
    //      <AppContextProvider> 
    //       <App2ContextProvider

    //          <App />

    //       </App2ContextProvider>
    //        </AppContextProvider> 
    //  </React.StrictMode>

  //   <BrowserRouter>
  //   <AppContextProvider>
  //     <App2ContextProvider>
  //       <App />
  //     </App2ContextProvider>
  //   </AppContextProvider>
  // </BrowserRouter>,

    // <BrowserRouter>
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
    
      <App />
  
  </AppContextProvider>
  </App2ContextProvider>
  </App3ContextProvider>
  </App4ContextProvider>
  </App5ContextProvider>
  </App6ContextProvider>
  </App7ContextProvider>
  </App8ContextProvider>
  </App9ContextProvider>
  </App10ContextProvider>
  </App11ContextProvider>

  // </BrowserRouter>,


       );


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

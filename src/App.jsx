import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from "react-router-dom";

import './App.css'

// IMPORT LAYOUTS
import Root from "./layouts/Root";
import Basiclayout from "./layouts/Basiclayout";
import Contactlayout from "./layouts/Contactlayout";

// IMPORT PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import { useEffect, useState } from "react";
// import OnLoad from "./components/OnLoad";


function App() {
  // const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route element={<Basiclayout />}>
          <Route index element={ <Home /> } />
        </Route>

        <Route element={<Contactlayout />}>
          <Route path='contact' element={ <Contact /> }/>
        </Route>
    
        <Route path='*' element={ <Navigate to="/" replace={true} /> } />
      </Route>
    )

  )

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false); // Cambia el estado a false cuando el contenido ha terminado de cargarse
  //   };

  //   window.on('load', handleLoad); // Agrega el evento 'load' al objeto 'window'

  //   // $(window).on("load",function(){
  //   //   $(".loader-wrapper").fadeOut("slow");
  //   // });
  // }, []);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

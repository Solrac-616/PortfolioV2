import { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from "react-router-dom";

import './App.css'

// IMPORT LAYOUTS
import Root from "./layouts/Root";
import Basiclayout from "./layouts/Basiclayout";
import Contactlayout from "./layouts/Contactlayout";

// IMPORT PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {

  useEffect(() => {
    const targetSections = document.querySelectorAll("observe");

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

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

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

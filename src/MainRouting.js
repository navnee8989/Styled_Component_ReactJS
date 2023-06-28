import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Promo from "./Promo";
import About from "./About";
import Blog from "./Blog";
import Contect from "./Contect";



const MainRouting = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Promo",
    element:<Promo/>
  },
  {
    path:"/Contact",
    element:<Contect/>
  },
{
  path:"Blog",
  element:<Blog/>
},
])


export default MainRouting;
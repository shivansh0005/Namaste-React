
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// const img={
  
//   img:"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/60b9076b-ec03-472c-9a86-fea17ae0aafe_643843.JPG"
// }


 const AppLayout=()=>{
    return ( 
    <div className="app"> 
        <Header/>
      <Outlet/>  
       

    </div>
    )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,

    children:[
      {
path:"/",
element:<Body/>
      },

      {
        path:"/about",
        element:<About/>
       
        
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        // :resId means redId is dynamic and can change 
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      
      }
    ],
    errorElement: <Error/>,
    
  },
 
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

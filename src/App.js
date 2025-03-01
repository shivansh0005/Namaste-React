
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider} from "react-redux"
import appstore from "./utils/appstore.js";
import Cart from "./components/Cart.js";

// import Grocery from "./components/Grocery.js";

// const img={
  
//   img:"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/60b9076b-ec03-472c-9a86-fea17ae0aafe_643843.JPG"
// }

//Chunking
//Code splitting
//Lazy Loading
const Grocery=lazy(()=>import("./components/Grocery.js"))

 const AppLayout=()=>{
    return ( 
      <Provider store={appstore}>
    <div className="app"> 
        <Header/>
      <Outlet/>  
   
       

    </div>
    </Provider>
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
      
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading Grocery Page...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error/>,
    
  },
 
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

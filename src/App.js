
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const img={
  
  img:"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/60b9076b-ec03-472c-9a86-fea17ae0aafe_643843.JPG"
}




 const AppLayout=()=>{
    return ( 
    <div className="app">
        

    
        <Header/>
        <Body/>
    

    </div>

    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

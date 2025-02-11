import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

 const Header=()=>{
    //console.log("Header component is rerendered")
  let [btnlogin,setbtnlogin]=useState("Login");
    return <div className="header">
        <div className="logo-container">
            <img className="logo"src={LOGO_URL}alt="Unable to load" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
             <li>
                <button onClick={()=>{
                    setbtnlogin((prev)=>(prev==="Login"?"Logout":"Login")
                )}}>

                    {btnlogin}
                </button>


             </li>
 
            </ul>
        </div>
    </div>
}
export default Header;



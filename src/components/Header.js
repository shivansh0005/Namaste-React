import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

 const Header=()=>{
  
  let [btnlogin,setbtnlogin]=useState("Login");
  const onlinestatus=useOnlinestatus();
  //use effect 101->if Called without dependency array it will be called everytime component renders 
//   if called with empty dependency array it will be called Only during intial render
//IF called with some dependency it will be called when the dependency changes 
  useEffect(()=>{

  });
    return <div className="header">
        <div className="logo-container">
            <img className="logo"src={LOGO_URL}alt="Unable to load" />
        </div>
        <div className="nav-items">
            <ul>
             
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about"> About</Link>
                </li>
                <li>
                <Link to="/contactus"> Contact</Link>
                  </li>
                <li>Cart</li>
             <li>
                <button onClick={()=>{
                    setbtnlogin((prev)=>(prev==="Login"?"Logout":"Login")
                )}}>

                    {btnlogin}
                </button>


             </li>
             <li>
              <Link to="/grocery">Grocery</Link>
             </li>

             <li>
               {onlinestatus?"🟢":"🔴"}
              </li>
 

            </ul>
        </div>
    </div>
}
export default Header;



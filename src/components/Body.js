import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useState } from "react";


//  console.log(resobj1);

  console.log(resobj);
const Body=()=>{

    
   
    const [resobj1,setResobj1]=useState(resobj.restaurants);
    console.log(resobj1)
   
    return (
        <div className="body">
            <div className="search">
           
                
               <h5 className="v">Search Your Fav Restaurants</h5> 
               <button className="filter-btn"onClick={()=>{
               
                setResobj1((prevRestaurants) =>
                    prevRestaurants.filter((res) => res.info.avgRating >= 4.4)
                  );
                console.log(resobj1);
              //   let fl=resobj1.filter((res)=>res.info.avgRating>4);
              //  setResobj1(fl)
               }}
               >Filter Top Rated</button> 
              
               
                </div>
          
                
              
                
                

            <div className="res-container">

             
            {resobj1.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
))}


               

            </div>
        </div>
    )
}
export default Body;
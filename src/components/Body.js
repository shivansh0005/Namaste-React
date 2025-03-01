import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";



console.log(resobj);
const Body = () => {
  const [resobj1, setResobj1] = useState([]);
  const[filteredres,setfilteredres]=useState([]);
  const [searchtext,setsearchtext]=useState("")
  //Continue from use effect and check the image taken in you gallery for why we are using the useEffect
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.468951546949388&lng=77.49547719955444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)

   
  

    setResobj1(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
// This is known as conditional rendering

const online=useOnlinestatus();
if(online===false){
  return <h1>Looks like you are ofline !!!</h1>
}

  if (resobj1.length === 0) {
    return (
      <div className="c">
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI/>
        <ShimmerUI/>
        <ShimmerUI/>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="buttons">
      <div className="search">
       <input type="text" className="search-box"value={searchtext} onChange={(e)=>{
setsearchtext(e.target.value);
       }}/>
       <button onClick={()=>{

 const filterres=resobj1.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
 setfilteredres(filterres)



       }}>Search</button>
      </div>
      <div className="search1">
       
        
      <button
  className="filter-btn"
  onClick={() => {
    const topRatedRestaurants = resobj1.filter((res) => res.info.avgRating >= 4.4);
    setfilteredres(topRatedRestaurants);
  }}
>
  Filter Top Rated
</button>

      </div>
      </div>

      <div className="res-container">
        {filteredres.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

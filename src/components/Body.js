import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

//  console.log(resobj1);

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
    console.log(json);

    setResobj1(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
// This is known as conditional rendering
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
console.log(searchtext)
 const filterres=resobj1.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
 setfilteredres(filterres)



       }}>Search</button>
      </div>
      <div className="search1">
       
        
        <button
          className="filter-btn"
          onClick={() => {
            setResobj1((prevRestaurants) =>
              prevRestaurants.filter((res) => res.info.avgRating >= 4.4)
            );
            console.log(resobj1);
          }}
        >
          Filter Top Rated
        </button>
      </div>
      </div>

      <div className="res-container">
        {filteredres.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

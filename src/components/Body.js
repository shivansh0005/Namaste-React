import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

//  console.log(resobj1);

console.log(resobj);
const Body = () => {
  const [resobj1, setResobj1] = useState([]);
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
      <div className="search">
        <h5 className="v">Search Your Fav Restaurants</h5>
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

      <div className="res-container">
        {resobj1.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

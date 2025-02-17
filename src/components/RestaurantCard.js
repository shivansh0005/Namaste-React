import { CDN_URL } from "../utils/constants";
const styleCard={
    backgroundColor: "#f0f0f0"


}
const RestaurantCard=(props)=>{

    const{resData}=props;
    // Destructure it on the fly
    const {cloudinaryImageId,name,avgRating,slaString,costForTwo,cuisines}=resData?.info;
    
    return (
        <div className="res-card"style={styleCard}>
            <img className="res-logo"src={CDN_URL+resData.info.cloudinaryImageId} alt=""  />

         -
            <h3>{name}</h3>
        <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwo}</h3>
            <h4>{avgRating}</h4>
             <h4>{slaString}</h4>
            
        </div>
    )
}
export default RestaurantCard;


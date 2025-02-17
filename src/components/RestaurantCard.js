// import { CDN_URL } from "../utils/constants";
// const styleCard={
//     backgroundColor: "#f0f0f0"


// }
// const RestaurantCard=(props)=>{

//     const{resData}=props;
//     // Destructure it on the fly
//     const {cloudinaryImageId,name,avgRating,slaString,costForTwo,cuisines}=resData?.info;
    
//     return (
//         <div className="res-card"style={styleCard}>
//             <img className="res-logo"src={CDN_URL+resData.info.cloudinaryImageId} alt=""  />

//          -
//             <h3>{name}</h3>
//         <h3>{cuisines.join(",")}</h3>
//             <h3>{costForTwo}</h3>
//             <h4>{avgRating}</h4>
//              <h4>{slaString}</h4>
            
//         </div>
//     )
// }
// export default RestaurantCard;


import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "15px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
};

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, slaString, costForTwo, cuisines } = resData?.info;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />

            <div className="res-card-content">
                <h3 className="res-name">{name}</h3>
                <p className="res-cuisines">{cuisines.join(", ")}</p>
                <p className="res-cost">{costForTwo}</p>
                <div className="res-info">
                    <span className="res-rating">⭐ {avgRating}</span>
                    <span className="res-time">{slaString}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;

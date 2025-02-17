// import { useEffect,useState } from "react";
// import ShimmerUi from "./ShimmerUI";
// import { MENU_LOGO } from "../utils/constants";

// const RestaurantMenu=()=>{

//     const [resInfo,setresInfo]=useState([])


//     useEffect(()=>{
// fetchMenu();
//     },[])

//     const fetchMenu=async()=>{
//         const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.501425840925776&lng=77.38397240638733&restaurantId=615654&catalog_qa=undefined&submitAction=ENTER");

//         const json=await data.json();
       
//         console.log(json);
//         setresInfo(json?.data);
        
        
//     }

//    console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.price/100)
  
//     return (resInfo===null)?<ShimmerUi/>: (
//         <div className="menu">
//             <h1>{resInfo?.cards?.[0]?.card?.card?.text}</h1>
          
//             <h2>Menu</h2>
//             <ul>
//                 <li>{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info.name}</li>
              
//                 <li>Dosa</li>
//               <img src={MENU_LOGO+resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.imageId} alt="" />
//                 {/* <li>{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.id||"Loading..."}</li> */}

//                 {/* <li>{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.offerTags?.price}</li> */}

//                 <li>{"₹"}{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.price/100}</li>
//             </ul>
//         </div>
//     )
// }
// export default RestaurantMenu;

import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { MENU_LOGO } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
// Above one is used to change and read restaurant id of diffrent restaurants in swiggy api



const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId}=useParams();
  
  

    useEffect(() => {
        fetchMenu();
    }, []);

    const a= 253985

    const fetchMenu = async () => {
        const data = await fetch(
            // `${MENU_API}${a}&catalog_qa=undefined&submitAction=ENTER`

            MENU_API+resId
            
        );
        const json = await data.json();
        setResInfo(json?.data);
       
    };

    if (!resInfo) return <ShimmerUi />;

    const restaurantName = resInfo?.cards?.[0]?.card?.card?.text || "Unknown Restaurant";

    const menuItems =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.filter((card) => card?.card?.card?.itemCards)
            ?.flatMap((card) => card?.card?.card?.itemCards)
            ?.map((item) => item?.card?.info) || [];

    return (
        <div className="restaurant-menu">
            <h1 className="restaurant-title">{restaurantName}</h1>
            <h2 className="menu-heading">Menu</h2>
            <ul className="menu-list">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <li key={item.id} className="menu-item">
                            <h3 className="menu-item-name">{item.name}</h3>
                            {item.imageId && (
                                <img
                                    className="menu-item-image"
                                    src={MENU_LOGO + item.imageId}
                                    alt={item.name}
                                />
                            )}
                            <p className="menu-item-price">Price: ₹{item.price / 100 || "N/A"}</p>
                        </li>
                    ))
                ) : (
                    <p className="no-menu">No menu items available</p>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;


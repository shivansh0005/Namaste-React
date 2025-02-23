import ShimmerUi from "./ShimmerUI";
import { MENU_LOGO } from "../utils/constants";
import { useParams } from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
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


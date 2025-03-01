import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { CART_URL } from "../utils/constants";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            <h1 className="cart-title">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty. Add some delicious food! 🍕</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img className="cart-item-image" src={CART_URL+item.imageId} alt={item.name} />
                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>
                                    <p className="cart-item-price">Price: ₹{item.price / 100 || "N/A"}</p>
                                    <button className="remove-btn" onClick={() => dispatch(removeItem(index))}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;

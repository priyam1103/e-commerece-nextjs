import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const InitialState = {
    user: {},
    cart: [],
    wishlist: [],
    orders: []
}
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
   
    function addToWishlist(product) {
        dispatch({
            type: "ADD_TO_WISHLIST",
            payload: {
                product
            }
        })
        
    }

    function updateOrder(order) {
        dispatch({
            type: "UPDATE_ORDER",
            payload: {
                order
            }
        })
        
    }

    function addToCart(product) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                product
            }
        })
        
    }

    function updateCartValue(product, quantity) {
        dispatch({
            type: "UPDATE_CART_VALUE",
            payload: {
                product,quantity
            }
        })
    }

    function removeFromWishlist(product) {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: {
                product
            }
        })
    }
    function removeFromCart(product) {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                product
            }
        })
    }
    function emptyCart() {
        dispatch({
            type: "EMPTY_CART",
            payload: {
                 
             }
        })
    }
    return (
        <GlobalContext.Provider
            value={{
                user: state.user,
                cart: state.cart,
                wishlist: state.wishlist,
                orders:state.orders,
                addToCart,
                addToWishlist,
                updateCartValue,
                removeFromWishlist,
                removeFromCart,
                updateOrder,
                emptyCart
            }}>
            {children}
        </GlobalContext.Provider>
    )
    
}
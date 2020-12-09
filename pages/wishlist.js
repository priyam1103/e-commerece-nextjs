import React,{useState,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../context/globalState';
import Link from 'next/link'
import { faShoppingCart,faHeart,faTrash } from '@fortawesome/free-solid-svg-icons'
export default function wishlist() {
    const {wishlist,removeFromWishlist} = useContext(GlobalContext)
    return (
        <div className="wishlist">
            <h2 className="wishlist-header">Users's wishlist</h2>
            {wishlist.length > 0 ? <>
                {wishlist.map((item, index) => (
                    <div className="wishlist-item" key={index}>
                        <img src={item.image} className="wishlist-img" />
                        <div className="item-detail">
                            <p className="product-title">{item.title}</p>
                            <p style={{ margin: 5 }}>₹<span className="price">{parseInt(73.63) * parseInt(item.price)}</span></p>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, margin: 10, borderRadius: 10 }}
                                    className={"ok-go"}>
                      
                                    <p style={{ marginTop: 5, marginLeft: 5, }}>View product</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "", padding: 5, margin: 10 }}
                                    onClick={()=>removeFromWishlist(item)}
                                    className={"ok-go rm-wis"}>
                                    <FontAwesomeIcon icon={faTrash} color="black" size="1x"
                                        style={{ cursor: "pointer", margin: 10 }} />
                                    <p style={{ marginTop: 5, marginLeft: 5, }}>Remove from wishlist</p>
                                </div>
                            </div>
                        </div>
                 
               
                    </div>
                ))}
            </> :<p className="no-item">No items yet</p>}
         
            
                
        </div>
    )
}

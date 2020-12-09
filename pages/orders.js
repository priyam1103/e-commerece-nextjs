import React,{useContext, useState} from 'react'
import { GlobalContext } from "../context/globalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faShoppingCart,faHeart,faTrash ,faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
export default function orders() {
    const { orders } = useContext(GlobalContext);
    console.log(orders);
    var total = 0;

    return (

        <div className="order-page">
           
            <div className="orders">
                <h1>Your orders</h1>
                {orders.length > 0 ?
                    <>
                        {orders.map((it, ind) => {
                            return (

                                <div key={ind} className="order">
                                    <p>#Order {ind + 1}</p>
                                    {it.map((item, index) => {

                                        total = total + parseInt(item.quantity) * parseInt(73.63) * parseInt(item.price);
                                        return (
                                            <div className="cart-item" key={index}>
                                        
                                                <img src={item.image} className="wishlist-img" />
                                                <div className="item-detail">
                                                    <p className="product-title">{item.title}</p>
                                                    <p style={{ margin: 5 }}>₹<span className="cart-price">{parseInt(73.63) * parseInt(item.price)}</span></p>
                                                    <div style={{ display: "flex", flexDirection: "row", height: 20, marginTop: 20 }}>
                                                        Oty - {item.quantity} | {item.size}
                                                    
                                                    </div>
                                                </div>
                                   
             
           
                                            </div>
                                        )
                                    })
                                    }
                                    <p style={{ marginLeft: 20 }}>Total order value -  ₹<span className="cart-subtotal-value">{total}</span></p>
                                </div>)
                
                        })
                
               
                
                        }</>:<div className="empty">
                        <FontAwesomeIcon icon={faShoppingBasket} color="black" size="2x" className="empty-icon"
                       />
                       <p className="empty-text">No orders yet, click
                        
                           <span style={{ textDecoration: "underline", color: "blue", marginRight: 5,marginLeft:5, cursor: "pointer" }}>
                               <Link href="/">here</Link></span>to shop</p>
                       </div>}
                </div>
            
            
        </div>
    )
}

import React,{useContext} from 'react'
import { GlobalContext } from "../context/globalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import StripeCheckout from "react-stripe-checkout";
import Link from 'next/link'
import { faShoppingCart,faHeart,faTrash ,faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
    const router = useRouter()
var total =0;
    const { cart ,updateCartValue,removeFromCart,updateOrder,emptyCart} = useContext(GlobalContext);
    const makePayment = (token) => {
        const body = {
          token,
          cart,
        };
        if (body.token) {
            emptyCart();
            updateOrder(cart);
            router.push('/orders')
        }
      };
    return (
        <div className="cart-page">
            {cart.length >= 1 ?
                <>
                    <div style={{ marginLeft: 20, marginTop: 20 }}>
                        {cart.map((item, index) => (
                            <>
                                <div className="cart-item" key={index}>
                                    <img src={item.image} className="wishlist-img" />
                                    <div className="item-detail">
                                        <p className="product-title">{item.title}</p>
                                        <p style={{ margin: 5 }}>₹<span className="cart-price">{parseInt(73.63) * parseInt(item.price)}</span></p>
                                        <div style={{ display: "flex", flexDirection: "row", height: 20, marginTop: 20 }}>
                                            <select name="Select" id="select" value={item.quantity}
                                                style={{ marginLeft: 10 }}
                                                onChange={e => {
                                                    updateCartValue(item, e.target.value)
                                                }}
                                            >
                   
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <div onClick={() => removeFromCart(item)}>
                                                <FontAwesomeIcon icon={faTrash} color="black" size="1x"
                                                    style={{ cursor: "pointer", marginLeft: 20 }} />
                      
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{ margin: 5 }}>₹<span className="price">{parseInt(item.quantity) * parseInt(73.63) * parseInt(item.price)}</span></p>
     
   
                                </div>
                    
                       
                            </>
                        ))}
                    </div>
                    <div className="cart-amount-sec">
                        {cart.map((item_, index_) => {
                            total = total + parseInt(item_.quantity) * parseInt(73.63) * parseInt(item_.price);
                            if (index_ == cart.length - 1) {
                                return (
                                    <>
                                        <p className="cart-subtotal">Subtotal ({cart.length} items) :</p>
                                        <p style={{ marginLeft: 10 }}> ₹<span className="cart-subtotal-value">{total}</span></p>
                                        <StripeCheckout
        stripeKey="pk_test_51Gum0JFFnzmgGp3Po7ZMbCrIeAOgew8eb21Q6yus788P1afQ4U75SbtjkytiwkIh4UStqVgM7cSgzdTeiy3GXUzm0060gAjvfS"
        token={makePayment}
        name="Payment for shopify"
        amount={total}
      >
        <div style={{
                                            display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, margin: 10,
                                            cursor: "pointer"
                                        }}
                                    
                                        >
                                            <FontAwesomeIcon icon={faShoppingBasket} color="black" size="1x"
                                                style={{ cursor: "pointer", margin: 10 }} />
                                            <p style={{ marginTop: 5, marginLeft: 5, }}>Proceed to buy</p>
                                        </div>
      </StripeCheckout>
                                       
                                    </>
                                )
                            }
                        })}
                    </div>
                </> :
                <div className="empty">
                     <FontAwesomeIcon icon={faShoppingBasket} color="black" size="2x" className="empty-icon"
                    />
                    <p className="empty-text">Your basket is empty , click
                     
                        <span style={{ textDecoration: "underline", color: "blue", marginRight: 5,marginLeft:5, cursor: "pointer" }}>
                            <Link href="/">here</Link></span>to shop</p>
                    </div>}
        </div>
    )
}

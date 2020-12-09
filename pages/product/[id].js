import React,{useContext} from 'react'
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../../context/globalState';
import Link from 'next/link'
import { faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Product({ product }) {
    const { addToWishlist, wishlist, removeFromWishlist,addToCart,cart } = useContext(GlobalContext);
    const [wish, setWish] = React.useState(false)
    const [cart_, setCart] = React.useState(false);
    React.useEffect(() => {
        check();
    }, [wishlist])
    async function check() {
        for (var i = 0; i < wishlist.length; i++){
            if (wishlist[i].id == product.id) {
                setWish(true);
                break;
            }
        }
        for (var j = 0; j < cart.length; j++){
            if (cart[j].id == product.id) {
                setCart(true);
                break;
            }
        }
    }
   
    const [sizechart, setSizeChart] = React.useState("")
    const [size, setSize] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1)
    const addToWish = () => {
        addToWishlist(product);
        console.log(wishlist);
        
    }
    async function toCart() {
        
        const data = {
            ...product,
            size: size,
            quantity:quantity
        }
        addToCart(data)
        setCart(true)
    }
            return (

        <div className="product-page">
            <div className="img-sec">
                <img src={product.image} className="product-img" />
             
            </div>
            <div className="product-detail">

                <p className="product-title">{product.title}</p>
                <hr />
                <div className="add-to-cart">
                    <div>
                <p>Price :<span className="price">₹{parseInt(73.63) * parseInt(product.price)}</span>
                       
                </p>
                <p className="fit">Fit: <span className="desc">True to size.</span></p>
                    <p className="fit">Colour: <span className="desc">Blue.</span></p>
                    </div>
                    <div style={{marginTop:20}}> 
                                <select name="Select" id="select" value={quantity}
                                    style={{marginLeft:10}}
                                  onChange={event => {
                               
                                    setQuantity(event.target.value)
                                }}>
                    <option>Qty</option>
                    <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
                                </select>
                                {cart_ ? 
                                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, margin: 10 }}
                              
                                className={"no-proceed"}>
                                <FontAwesomeIcon icon={faShoppingCart} color="black" size="1x"
                                    style={{ cursor: "pointer", margin: 10 }} />
                                <p style={{ marginTop: 5, marginLeft: 5, }}>In Cart</p>
                            </div> :
                                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, margin: 10 }}
                                        onClick={() => {
                                            if (size == null) {
                                                if (product.category === "electronics" || product.category === "jewelery") {
                                                    toCart()
                                                }
                                        
                                            } else
                                                toCart()
                                        }}
                                        className={size == null && (product.category == "electronics" || product.category == "jewelery")? "ok-go" : size == null?"no-proceed":"ok-go"}>
                                        <FontAwesomeIcon icon={faShoppingCart} color="black" size="1x"
                                            style={{ cursor: "pointer", margin: 10 }} />
                                        <p style={{ marginTop: 5, marginLeft: 5, }}>Add to cart</p>
                                    </div>
                                }
                                {wish ?
                                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, cursor: "pointer", margin: 10 }}
                                        onClick={() => {
                                            
                                            removeFromWishlist(product)
                                            setWish(!wish)
                                        }}>
                                        <FontAwesomeIcon icon={faHeart} color="black" size="1x"

                                            style={{ cursor: "pointer", margin: 10 }} />
                                        <p style={{ marginTop: 5, marginLeft: 5, }}>Wishlisted</p>
                                    </div>:
                                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#f0c14b", padding: 5, cursor: "pointer", margin: 10 }}
                                        onClick={() => addToWish()}>
                                        <FontAwesomeIcon icon={faHeart} color="black" size="1x"

                                            style={{ cursor: "pointer", margin: 10 }} />
                                        <p style={{ marginTop: 5, marginLeft: 5, }}>Add to wishlist</p>
                                    </div>}
                    </div>
                    </div>
                        <img className="img" src={product.image} />
                        {product.category === "electronics" || product.category === "jewelery" ? null :
                            <>
                <p className="fit">Size:</p>
                <div style={{display:"flex",flexDirection:"row",}}>
                            <select name="Select" id="select" className="size-select"
                            onChange={event => {
                                if (event.target.value == "Select") {
                                    setSize(null)
                               }else
                                setSize(event.target.value)
                            }}>
                    <option>Select</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
                </select>
                    <p
                        onClick={()=>setSizeChart("showchart")}
                        style={{ marginTop: 10, marginLeft: 10, color: "blue", textDecoration: "underline", fontSize: 12, cursor: "pointer" }}>Size chart</p>
                                </div>
                                </>
                        }
                <div className={`center ${sizechart}`}>
                    <h1>The Normal Brand Size Chart</h1>
                    <span onClick={()=>setSizeChart("")}>Close</span>
<table className="sizeChart" border="0" cellPadding="5" cellSpacing="0" width="80%">
<thead>
  <tr>
    <td>Mens</td>
    <td>Small</td>
    <td>Medium</td>
    <td>Large</td>
    <td>X-Large</td>
    <td>XX-Large</td>
  </tr>
</thead>
<tbody>
<tr>
<td>Neck</td>
<td>14-14.5</td>
<td>15-15.5</td>
<td>16-16.5</td>
<td>17-17.5</td>
<td>18-18.5</td>
</tr>
<tr>
<td>Chest</td>
<td>35-37</td>
<td>38-40</td>
<td>41-43</td>
<td>44-46</td>
<td>47-49</td>  
</tr>
<tr>
<td>Sleeve</td>
<td>32-33</td>
<td>33-34</td>
<td>34-35</td>
<td>35-36</td>
<td>36-36.5</td>
</tr>
<tr>
<td>Waist</td>
<td>29-31</td>
<td>32-34</td>
<td>35-37</td>
<td>38-40</td>
<td>41-43</td>
</tr>
</tbody>
</table>
<p><strong>Neck:</strong> Measure around the middle of your neck (at the Adam’s apple), keeping the tape a bit loose.</p>
<p>
<strong>Chest:</strong> Measure under your arms around the fullest part of your chest.
</p>
<p style={{width:"50vw"}}>
<strong>Arm length:</strong> Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center of the back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your sleeve length.</p>
<p>
<strong>Waist:</strong> Measure around your natural waistline, keeping the tape a bit loose.</p>
                </div>
                <p className="prod-desc">{product.description}</p>
            </div>
            
        </div>
    )
}
export async function getStaticPaths() {
  
    const res = await fetch('https://fakestoreapi.com/products')
    const items = await res.json()
    
    const paths = items.map((item) => ({    
        
      params: { id: item.id.toString() },
    }))
    return { paths, fallback: false }
  }
  
 
  export async function getStaticProps({ params }) {
   console.log(params)
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()
    return { props: { product } }
  }
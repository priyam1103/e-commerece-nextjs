import React from 'react'
import Link from 'next/link'
export default function Description({products}) {
    return (
        <div className="description">
            <div className="front-box">
       
<img className="box" src="https://www.rankandstyle.com/media/products/a/amazon-mens-clothing-websites_4PJERTZ.jpg"/>
    
          <div className="front-details">
            <Link href={{pathname:'/productlist',query:{products}}}>
              <p className="front-header">Men's clothing</p>
              </Link>
          <p className="font-desc">“Every man should have a magnifying mirror. If you look good magnified, you are set to go” </p>
        </div>
        
      </div>
      <div className="front-box-reverse">
      
<img className="box" src="https://urbantastebud.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-13-at-10.07.50-PM.png"/>
        
          <div className="front-details">
          <Link href="/productlist">
              <p className="front-header">Women's clothing</p>
              </Link>
  <p className="font-desc">"Over the years we have learned that what is important in a dress is the woman who is wearing it."</p>
</div>
       
      </div>
      <div className="front-box">
    
<img className="box" src="https://etimg.etb2bimg.com/photo/76690341.cms"/>
        
          <div className="front-details">
          <Link href="/productlist">
              <p className="front-header">Electronics</p>
              </Link>
  <p className="font-desc">“Appliances Makes Everything Better.” </p>
</div>
        </div>
        <div className="front-box-reverse">
      
      <img className="box" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGkK7EeIfJChHX8A6hqAb-8yJMYVh0fvD6g&usqp=CAU"/>
              
          <div className="front-details">
          <Link href="/productlist">
              <p className="front-header">Jewelery</p>
              </Link>
        <p className="font-desc">"A woman needs ropes and ropes of pearls."</p>
      </div>
             
            </div>
        </div>
    )
}

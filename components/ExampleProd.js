import React from 'react'
import Link from 'next/link'
export default function ExampleProd({products}) {
    console.log(products);
    return (
        <div className="product-disp">
            <div>
                <p className="example-header">Men</p>
            <div className="example-section">
               
            {products.map((item, index) => (
                
            <div key={index}>
                    {item.category === "men clothing" &&
                        <Link href={`/product/${item.id}`}>
                        <img src={item.image} className="example-img" />
                        </Link>}
                    </div>
            
                    
            
            ))}
                </div>
            </div>
            <div>
            <p className="example-header">Jewelery</p>
        <div className="example-section">
        {products.map((item, index) => (
            
        <div key={index}>
                {item.category === "jewelery" &&
                    <Link href={`/product/${item.id}`}>
                    <img src={item.image} className="example-img"/></Link>}
                </div>
        
                
        
        ))}
                </div>
                </div>
            <div>
            <p className="example-header">Electronics</p>
        <div className="example-section">
        {products.map((item, index) => (
            
        <div key={index}>
                {item.category === "electronics" &&
                    <Link href={`/product/${item.id}`}>
                    <img src={item.image} className="example-img" />
                    </Link>}
                </div>
        
                
        
        ))}
                </div>
            </div>
            <div>
            <p className="example-header">Women</p>
            <div className="example-section">
        {products.map((item, index) => (
            
        <div key={index}>
                {item.category === "women clothing" &&
                    <Link href={`/product/${item.id}`}>
                    <img src={item.image} className="example-img" />
                    </Link>}
                </div>
        
                
        
        ))}
                </div>
                </div>
            </div>
    )
}

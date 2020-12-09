import React from 'react'
import { useRouter } from 'next/router';
import fetch from "isomorphic-fetch";
export default function ProductList() {
    const router = useRouter()
    console.log(router.query.category);
const [products,setProducts] = React.useState([])
    React.useEffect(() => {
        if (router) {
            if (router.query.category === "men clothing" || router.query.category === "jewelery" || router.query.category === "electronics" || router.query.category === "women clothing") {
                fetch(`https://fakestoreapi.com/products/category/${router.query.category}`)
                    .then((res) => {
                        console.log(res)
                        res.json()
                    }).then((res_) => {
                        console.log(res_)
                    })
            } else {
                console.log(router.query.category === "electronics")
                router.replace("/");
            }
        }
    },[router.query.category])
  
    return (
        <div>
            
        </div>
    )
}


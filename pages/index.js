import React from "react";
import Slider from "../components/slider"
import fetch from "isomorphic-fetch"
import Description from "../components/Description";
import ExampleProd from "../components/ExampleProd";
export default function Home(props) {
  const [products, setProducts] = React.useState(props.data)
  console.log(products)
  return (
    <div>
      <div className="show-slider">
        <Slider />
        </div>
      <ExampleProd products={products}/>
      <Description products={products}/>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json()

  if (!data) {
    return {
      notFound:true
    }
  }
  return {
    props:{data}
  }
}

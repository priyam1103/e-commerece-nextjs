import React, { useState } from "react";

import StripeCheckout from "react-stripe-checkout";
export default function Checkout() {
  console.log("vfnvj")
  const [product, setProduct] = useState({
    name: "React from facebook",
    price: 10,
    productBy: "Facebook",
  });
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    console.log(body)
  };
  return (
    <div >
      <StripeCheckout
        stripeKey="pk_test_51Gum0JFFnzmgGp3Po7ZMbCrIeAOgew8eb21Q6yus788P1afQ4U75SbtjkytiwkIh4UStqVgM7cSgzdTeiy3GXUzm0060gAjvfS"
        token={makePayment}
        name="Buy React"
        amount={product.price * 100}
      >
        <button>Click to Pay</button>
      </StripeCheckout>
    </div>
  );
}

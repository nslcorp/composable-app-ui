import { createSession } from "@/api/createSession";
import CheckoutV2 from "@/app/cart/checkout/CheckoutV2";
import React from 'react';

const CheckoutPage = async () => {

  const session = await createSession()

  return (
    <div id="payment-page">
      <div className="container">
        <CheckoutV2 session={session}/>
      </div>
    </div>

  );
};



export default CheckoutPage;
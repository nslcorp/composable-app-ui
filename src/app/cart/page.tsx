import React from 'react';
import CartItem from "@/app/cart/CartItem/CartItem";
import CartItem2 from "@/app/cart/CartItem2";

const CartPage = () => {
  return (
    <div className="flex justify-between">
      {/* Sopping Cart List section*/}
      <div className="w-full">
        <CartItem />
        <CartItem />


        <CartItem2 />

      </div>
      <div className="w-1/3">
        <h1>Total section</h1>
      </div>

      {/* Total section*/}
    </div>
  );
};

export default CartPage;
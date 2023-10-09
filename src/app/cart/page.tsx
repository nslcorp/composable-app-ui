'use client';
import React from "react";
import CartItem from "@/app/cart/CartItem/CartItem";
import Summary from "@/app/cart/Summury/Summary";
import SectionLayout from "@/components/SectionLayout/SectionLayout";

import {useSelector} from "react-redux";
import {selectCart} from "@/store/reducer/cartSlice";
import {useAppSelector} from "@/store/store";


const CartPage = () => {


  const data = useAppSelector(selectCart)
  console.log('CartPage: data', data);



  return (
    <div className="flex justify-between">
      {/* Sopping Cart List section*/}
      <div className="w-2/3">
        <SectionLayout>
          <div className="text-2xl font-bold">Shopping Cart</div>
          <div className="border my-4"></div>
          {data ? data.lineItems.map((item) => <CartItem key={item.id} item={item} />): <h1>Cart items are empty :(</h1>}

        </SectionLayout>
      </div>
      <div className="">
        <Summary />
      </div>

      {/* Total section*/}
    </div>
  );
};

export default CartPage;

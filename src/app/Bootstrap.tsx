"use client";
import React, { useEffect } from "react";
import { getCart } from "@/api/cart/getCart";
import { createCart } from "@/api/cart/createCart";
import {dispatch, useAppDispatch} from "@/store/store";
import { setCart } from "@/store/reducer/cartSlice";
import { useLocalStorage } from "react-use";

const CART_ID_KEY = "userCartId";

const Bootstrap = (props: any) => {
  // const cartId = localStorage.getItem(CART_ID_KEY) || "";
  const [cartId, setCartId] = useLocalStorage(CART_ID_KEY, "");

  useEffect(() => {
    console.log('useEffect: cartId', cartId);
    (async () => {
      if (!cartId) {
        const {cartId} = await createCart();
        // localStorage.setItem(CART_ID_KEY, cartResponse.cartId);
        console.log("Bootstrap.useEffect: cart", cartId); // const dispatch = useAppDispatch();
        setCartId(cartId);
      }
      const cart = await getCart(cartId);
      dispatch(setCart(cart));
    })();
  }, [cartId]);

  return <>{props.children}</>;
};

export default Bootstrap;

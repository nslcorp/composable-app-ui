import { request } from "@/api/request";
import CartItem from "@/app/cart/CartItem/CartItem";
import { AddCartProduct } from "@/types";
import { CART_ID_KEY } from "@/app/Bootstrap";

export const addProductToCart = async (cartProduct: AddCartProduct) => {
  if (!localStorage) {
    throw new Error("No localStorage");
  }
  const cartId = localStorage.getItem(CART_ID_KEY) || "";

  if (!cartId) {
    throw new Error("No cartId in localStorage");
  }

  try {
    const data: any = await request(
      `http://localhost:3000/cart/${cartId.replaceAll('"', "")}/items`,
      {
        method: "POST",
        body: cartProduct,
      }
    );
    return data;
  } catch (error: any) {
    console.error("Error.addProductToCart:", error.message);
  }
};

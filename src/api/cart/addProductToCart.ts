import { request } from "@/api/request";
import { AddCartProduct } from "@/types";
import { getCartId } from "@/api/cart/getCartId";

export const addProductToCart = async (cartProduct: AddCartProduct) => {
  try {
    const cartId = getCartId();

    const data: any = await request(
      `http://localhost:3000/cart/${cartId}/items`,
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

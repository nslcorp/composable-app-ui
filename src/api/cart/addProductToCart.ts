import { BASE_ULR, request } from "@/api/request";
import { AddCartProduct } from "@/types";
import { getCartId } from "@/api/cart/getCartId";

export const addProductToCart = async (cartProduct: AddCartProduct) => {
  try {
    const cartId = getCartId();

    const data: any = await request(
      `${BASE_ULR}/cart/${cartId}/items`,
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

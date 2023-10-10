import {getCartId} from "@/api/cart/getCartId";
import {request} from "@/api/request";
import {CART_ID_KEY} from "@/app/Bootstrap";

export const putOrder = async () => {
  try {
    const cartId = getCartId();

    const data: string = await request(
      `http://localhost:3000/cart/${cartId}/order`,
      {
        method: "PUT",
      }
    );

    localStorage.removeItem(CART_ID_KEY);

    // returned parameter is Placed order ID
    return data;
  } catch (error: any) {
    console.error("Error.putOrder:", error.message);
  }
}
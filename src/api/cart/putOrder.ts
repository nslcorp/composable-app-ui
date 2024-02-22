import { getCartId } from "@/api/cart/getCartId";
import { BASE_ULR, request } from "@/api/request";
import { CART_ID_KEY } from "@/app/Bootstrap";

export interface Order {
  id: string;
}

export const putOrder = async (): Promise<Order> => {
  try {
    const cartId = getCartId();

    const data = (await request(`${BASE_ULR}/cart/${cartId}/order`, {
      method: "PUT",
    })) as Order;

    localStorage.removeItem(CART_ID_KEY);

    // returned parameter is Placed order ID
    return data;
  } catch (error: any) {
    console.error("Error.putOrder:", error.message);
    throw error;
  }
};

import {getCartId} from "@/api/cart/getCartId";
import { BASE_ULR, request } from "@/api/request";

export const removeProductFormCart = async (itemId: string) => {
  try {
    const cartId = getCartId();

    const data: any = await request(
      `${BASE_ULR}/cart/${cartId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    );
    return data;
  } catch (error: any) {
    console.error("Error.removeProductFormCart:", error.message);
  }
};
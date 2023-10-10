import {getCartId} from "@/api/cart/getCartId";
import {request} from "@/api/request";

export const removeProductFormCart = async (itemId: string) => {
  try {
    const cartId = getCartId();

    const data: any = await request(
      `http://localhost:3000/cart/${cartId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    );
    return data;
  } catch (error: any) {
    console.error("Error.removeProductFormCart:", error.message);
  }
};
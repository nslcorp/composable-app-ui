import {request} from "@/api/request";
import {getUserCartId} from "@/api/cart/getUserCartId";
import CartItem from "@/app/cart/CartItem/CartItem";
import {AddCartProduct} from "@/types";

export const addProductToCart = async (cartProduct: AddCartProduct) => {

  const cartId = await getUserCartId();

  try {
    const data: any = await request(`http://localhost:3000/cart/${cartId}/items`, {
      method: "POST",
      body: cartProduct,
    });
    return data;
  }catch (error: any) {
    console.error('Error.addProductToCart:', error.message);
  }


}
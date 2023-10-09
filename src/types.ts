export interface Category {
  id: number;
  name: string;
  product_count: number;
  ancestors: any;
  parent: {
    id: number;
  };
}

export interface Product {
  id: string;
  description: string;
  slug: any;
  name: string,
  price: number,
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  sku: string;
  prices: {
    value: { currencyCode: string; centAmount: number };
  }[];
  images: {
    url: string;
  }[];
  attributes: {
    color: string;
    size: string;
  }[];
  slug: string;
}


export interface CartLineItem {
  id: string;
  quantity: number;
  totalPrice: number;
  variant: {
    sku: string;
    name: string;
    prices: {value: {
      currencyCode: string;
      centAmount: number;
      }}[];
  }
}
export interface Cart {
  id: string;
  customerId: null | string;
  lineItems: CartLineItem[];
}

export interface AddCartProduct {
  sku: string;
  qty: string;
}
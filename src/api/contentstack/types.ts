import { Product } from "@/types";

export interface ProductResponse {
  commercetools_id: string;
  description: string;
  price: number;
  category: CategoryResponse[];
  promo_section: PromoSection[];
  seo: Seo;
  tags: [];
  title: string;
  url: string;
}

export interface PromoSection {
  promo_text?: PromoText;
  promo_image?: PromoImage;
  related_products?: PromoRelatedProducts;
}

export interface PromoText {
  title: string;
  description: string;
}

export interface PromoImage {
  title: string;
  image: Image;
}

export interface PromoRelatedProducts {
  title: string;
  relatedproducts: ProductResponse[];
}

export interface CategoryResponse {
  uid: string;
}

export interface Seo {
  enable_search_indexing: boolean;
  keywords: string;
  meta_description: string;
  meta_title: string;
}

export type Image = {
  filename: string;
  url: string;
}

export interface SalePage {
  uid: string;
  title: string;
  banner_image: Image,
  offer_list: SaleOfferRecord[]
}

export interface SaleOfferRecord {
  title: string,
  description: string,
  image: Image,
  url: {
    title: string,
    href: string
  }
}

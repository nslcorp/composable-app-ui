export interface ProductResponse {
  commercetools_id: string;
  description: string;
  price: number;
  category: CategoryResponse[];
  promo_section: (PromoText | PromoImage | PromoRelatedProducts)[];
  seo: Seo;
  tags: [];
  title: string;
  url: string;
}

interface PromoText {
  promo_text: { title: string; description: string };
}

interface PromoImage {
  promo_image: { title: string; promo_image_value: any };
}

interface PromoRelatedProducts {
  related_products: {
    related_products_value: string;
  };
}

export interface CategoryResponse {
  uid: string;
}

export interface PromoTextResponse {
  title: string;
  description: string;
}

export interface Seo {
  enable_search_indexing: boolean;
  keywords: string;
  meta_description: string;
  meta_title: string;
}

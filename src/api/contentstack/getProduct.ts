import { contentstackClient } from "@/api/contentstack/contentstackClient";
import { ProductResponse } from "@/api/contentstack/types";

export const getProduct = async (slug: string) => {
  const ProductQuery = contentstackClient.ContentType("product").Query();
  // ProductQuery.includeReference('"page_components.from_blog.featured_blogs"')
  ProductQuery.includeReference([
    "promo_section.related_products.relatedproducts",
  ]);

  const productsResponse = await ProductQuery.toJSON()
    .find()
    .then((response) => response[0] as ProductResponse[]);

  const productMatchedBySlug = productsResponse.find(
    (p) => p.url === `/product/${slug}`
  );
  const defaultProduct = productsResponse.filter(
    (p) => p.url === "/product/*"
  )[0];

  const product = productMatchedBySlug ? productMatchedBySlug : defaultProduct;

  const productPromo = product.promo_section;
  //   .map(record => {
  //   // @ts-ignore
  //   if(record['promo_text']){
  //
  //   }
  //
  // })

  return productPromo;
};

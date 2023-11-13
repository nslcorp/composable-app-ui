import { PromoSection } from "@/api/contentstack/types";
import Link from "next/link";
import React from "react";

const PromoList = ({ data }: { data: PromoSection[] }) => {
  return (
    <div className="flex flex-col mr-8 mb-5 gap-5">
      {data.map((record) => {
        if (record.promo_text) {
          const { title, description } = record.promo_text;
          return (
            <div
              key={title}
              className="flex border border-neutral-200 rounded-md hover:shadow-xl"
            >
              <div className="flex flex-col items-start p-4 grow">
                <p className="font-medium typography-text-base">{title}</p>
                <p className="font-normal typography-text-sm text-neutral-700">
                  {description}
                </p>
              </div>
            </div>
          );
        }

        // @ts-ignore
        if (record.promo_image) {
          const { title, image } = record.promo_image;
          return (
            <div
              key={title}
              className="flex border border-neutral-200 rounded-md hover:shadow-xl"
            >
              <div className="flex flex-col items-start p-4 grow">
                <p className="font-medium typography-text-base">{title}</p>
                <img src={image.url + "?width=200"} alt={image.filename} />
              </div>
            </div>
          );
        }

        if (record.related_products) {
          const { title, relatedproducts } = record.related_products;
          console.log(relatedproducts);

          return (
            <div
              key={title}
              className="flex border border-neutral-200 rounded-md hover:shadow-xl"
            >
              <div>{title}</div>
              <div className="flex flex-col items-start p-4 grow">
                {relatedproducts.map((relatedProduct) => (
                  <p className="font-medium typography-text-base">
                    <span>Did you notice the </span>
                    <Link href={relatedproducts[0].url} className="underline">
                      {relatedProduct.title}?
                    </Link>

                    <span>  Price only ${relatedProduct.price}</span>
                  </p>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PromoList;

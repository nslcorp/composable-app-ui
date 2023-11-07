import { contentstack } from "@/api/contentstack";
import delay from "delay";
import React from 'react';

const PromoSection = async () => {
  // await delay(1000)
  // console.log(productResponse.promo_section)

  return (
    <div className="flex flex-col mr-8 mb-5 gap-5">
      <div className="flex border border-neutral-200 rounded-md hover:shadow-xl">
        <div className="flex flex-col items-start p-4 grow">
          <p className="font-medium typography-text-base">Promo Text</p>
          <p className="font-normal typography-text-sm text-neutral-700">description</p>
        </div>
      </div>

      <div className="flex border border-neutral-200 rounded-md hover:shadow-xl">
        <div className="flex flex-col items-start p-4 grow">
          <p className="font-medium typography-text-base">Promo Image</p>
          <p className="font-normal typography-text-sm text-neutral-700">description</p>
        </div>
      </div>

      <div className="flex border border-neutral-200 rounded-md hover:shadow-xl">
        <div className="flex flex-col items-start p-4 grow">
          <p className="font-medium typography-text-base">Promo Related Products</p>
          <p className="font-normal typography-text-sm text-neutral-700">description</p>
        </div>
      </div>
    </div>

  );
};

export default PromoSection;
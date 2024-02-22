import { SfButton } from "@storefront-ui/react";
import Link from "next/link";
import React from 'react'
import Image from 'next/image'

// const data = [
//   {img: '', }
// ]

import { getSalesLanding } from "@/api/contentstack/getSalesLanding";

interface SalePageProps {
  searchParams: {
    type: string;
  };
}

const Page = async (props: SalePageProps) => {
  console.log(props)
  const type = props.searchParams.type
  const data = await getSalesLanding(type)

  return (
    <div className="container max-w-screen-lg">
      <h1 className="text-lg md:text-3xl font-bold mt-4 mb-10">{data.title}</h1>
      <Image src={data.banner_image.url} alt="FLash sale banner" width={1000} height={300} />

      <h1 className="text-md md:text-xl font-bold mt-4 mb-10">Look our sales:</h1>

      <div className="flex flex-col flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
        {data.offer_list.map(({ image, title, description, url }) => {
          const navigateToUrl = url.href
          return (
            <div
              key={title}
              className="flex  relative border border-neutral-200 rounded-md hover:shadow-xl"
            >
              <Link href={navigateToUrl} className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"/>
              <div className="flex">
                <img src={image.url} alt={title} className="object-contain h-auto rounded-t-md aspect-video"/>
              </div>
              <div className="flex max-w-md">
                <div className="flex flex-col items-start p-4 grow">
                  <p className="font-medium typography-text-base">{title}</p>
                  <p className="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{description}</p>
                  <Link href={navigateToUrl} className="relative mt-auto font-bold">
                    Go Sales
                  </Link>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Page;
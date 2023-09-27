"use client";
import {
  SfButton,
  SfLink,
  SfIconShoppingCart,
  SfSelect,
} from "@storefront-ui/react";
import { Product } from "@/types";
import React from "react";

interface ProductListRecordProps {
  item: Product;
  className?: string;
}

export default function ProductListRecord(props: ProductListRecordProps) {
  const [selectedVariant, setSelectedVariant] = React.useState(
    props.item.variants[0]
  );

  const price = selectedVariant.prices[0].value.centAmount;
  const imageUrl = selectedVariant.images[0].url;

  const sizes = new Set(
    props.item.variants
      .map((variant) => {
        return variant.attributes.map((attribute) => attribute.size);
      })
      .flat()
  );

  const colors = new Set(
    props.item.variants
      .map((variant) => {
        return variant.attributes.map((attribute) => attribute.color);
      })
      .flat()
  );

  const colorOptions = Array.from(colors).map((record) => ({
    label: record,
    value: record,
  }));
  const sizeOptions = Array.from(sizes).map((record) => ({
    label: record,
    value: record,
  }));

  const [selectedColor, setSelectedColor] = React.useState(
    colorOptions[0].value
  );
  const [selectedSize, setSelectedSize] = React.useState(sizeOptions[0].value);


  const navigateTo = `/product/${props.item.slug}`;

  return (
    <div className={props.className}>
      <div className="border border-neutral-200 rounded-md hover:shadow-lg flex">
        <div>
          <SfLink href={navigateTo} className="block">
            <img
              src={imageUrl}
              alt="Great product"
              className="object-cover h-auto rounded-md aspect-square"
              width="300"
              height="300"
            />
          </SfLink>
        </div>
        <div className="p-4 border-neutral-200 border-l w-full flex flex-col justify-around">
          <div className="flex">
            <div>
              <SfLink
                href={navigateTo}
                variant="secondary"
                className="text-lg text-emerald-800"
              >
                {props.item.name}
              </SfLink>
            </div>
            <div className="ml-auto">
              <span className="block pb-2 font-bold typography-text-lg">
                ${price}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/3 mr-4">
              <label>
                <span className="pb-1 text-sm font-medium text-neutral-900 font-body">
                  Color
                </span>
                <SfSelect
                  placeholder="Select color"
                  size="sm"
                  value={selectedColor}
                  onChange={(event) => setSelectedColor(event.target.value)}
                >
                  {colorOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </SfSelect>
              </label>
            </div>
            <div className="w-1/3 mr-4">
              <label>
                <span className="pb-1 text-sm font-medium text-neutral-900 font-body">
                  Size
                </span>
                <SfSelect placeholder="-- Select --" size="sm" value="red">
                  {sizeOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </SfSelect>
              </label>
            </div>
            <div className="w-1/3 flex mt-4">
              <SfButton
                className="ml-auto"
                type="button"
                size="sm"
                slotPrefix={<SfIconShoppingCart size="sm" />}
                disabled
              >
                Add to cart
              </SfButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//array filter by unique values
// const unique = [...new Set(array)];

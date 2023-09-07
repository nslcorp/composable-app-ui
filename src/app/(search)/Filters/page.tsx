"use client";
import {
  SfAccordionItem,
  SfCounter,
  SfListItem,
  SfIconChevronLeft,
  SfIconCheck,
} from "@storefront-ui/react";
import classNames from "classnames";
import { Category } from "@/types";
import { useState } from "react";

interface FilersProps {
  categories: Category[];
  // onCategoryChange: (id: number) => void;
}

const initialFilters = {
  activeCategory: "Women",
};

export default function Filters(props: FilersProps) {
  const [filters, setFilters] = useState(initialFilters);
  //

  return (
    <SfAccordionItem
      open={true}
      // onToggle={() => setOpened(!opened)}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Category</p>
          <SfIconChevronLeft
            className={classNames(
              "text-neutral-500"
              // `${opened ? "rotate-90" : "-rotate-90"}`
            )}
          />
        </div>
      }
    >
      <ul className="mt-2 mb-6">
        {/*<li>*/}
        {/*  <SfListItem size="sm" as="button" type="button">*/}
        {/*    <div className="flex items-center">*/}
        {/*      <SfIconArrowBack size="sm" className="text-neutral-500 mr-3" />*/}
        {/*      Back to {categories[0].label}*/}
        {/*    </div>*/}
        {/*  </SfListItem>*/}
        {/*</li>*/}
        {props.categories.map((category, index) => {
          const isActiveCategory = filters.activeCategory === category.name;
          return (
            <li
              key={category.id}
              onClick={() => {
                setFilters({ ...filters, activeCategory: category.name });
              }}
            >
              <SfListItem
                size="sm"
                as="a"
                href="#"
                className={classNames(
                  "first-of-type:mt-2 rounded-md active:bg-primary-100",
                  {
                    "bg-primary-100 hover:bg-primary-100 font-medium":
                      isActiveCategory,
                  }
                )}
                slotSuffix={
                  isActiveCategory && (
                    <SfIconCheck size="sm" className="text-primary-700" />
                  )
                }
              >
                <span className="flex items-center">
                  {category.name}
                  <SfCounter className="ml-2 typography-text-sm font-normal">
                    {category.product_count}
                  </SfCounter>
                </span>
              </SfListItem>
            </li>
          );
        })}
      </ul>
    </SfAccordionItem>
  );
}
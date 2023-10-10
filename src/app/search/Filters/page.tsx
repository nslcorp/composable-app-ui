"use client";
import { SfCounter, SfListItem } from "@storefront-ui/react";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Category } from "@/types";

interface FilersProps {
  categories: Category[];
}

export default function Filters(props: FilersProps) {
  const searchParam = useSearchParams();
  const activeCategory = searchParam.get("category") || "";

  return (
    <>
      <h4 className="font-bold typography-headline-4">Categories:</h4>
      <ul className="mt-2 mb-6">
        <div className=""></div>
        {props.categories.map((categoryRecord, index) => {
          const categoryNameSP = categoryRecord.name
            .toLowerCase()
            .replaceAll(" ", "_");
          const isActiveCategory = activeCategory === categoryNameSP;

          return (
            <Link
              key={categoryRecord.id}
              href={{
                pathname: "/search",
                query: {
                  category: categoryNameSP,
                },
              }}
            >
              <SfListItem
                size="sm"
                key={categoryRecord.id}
                selected={isActiveCategory}
              >
                <span className="break-words">
                  {categoryRecord.name}
                  <SfCounter className="ml-2">
                    {categoryRecord.product_count}
                  </SfCounter>
                </span>
              </SfListItem>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

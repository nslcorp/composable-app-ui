import { request } from "@/api/request";
import { Category } from "@/types";
import {omit} from "next/dist/shared/lib/router/utils/omit";


// const flatCategories = (categories: Category[]) => {
//   const data = categories.map((category) => {
//     // @ts-ignore
//     const record = omit(category, ["ancestors", "parent"])
//     console.log(record);
//     const cilds = flatCategories(category.ancestors);
//     return [
//       category,
//       cilds
//     ];
//   });
// };

//convert Category[] with nested ancestors flat Category[]
// const flatCategories = (categories: Category[]) => {
//   const data = categories.map((category) => {
//     // @ts-ignore
//     const record = omit(category, ["ancestors", "parent"])


export const fetchCategories = async () => {
  try {
    const categories: Category[] = await request(
      "http://localhost:3000/categories"
    );



    return categories;


  }catch (error) {
    console.log(error);
    return []
  }

};

// {
//   "id": 20,
//   "name": "Women",
//   "product_count": 0,
//   "ancestors": [

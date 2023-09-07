import { request } from "@/api/request";
import { Category } from "@/types";

export const fetchCategories = async () => {
  const categories: Category[] = await request(
    "http://localhost:3000/categories"
  );
  return categories;
};

// {
//   "id": 20,
//   "name": "Women",
//   "product_count": 0,
//   "ancestors": [

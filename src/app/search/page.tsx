import ProductsList from "@/app/search/ProductsList/ProductsList";
import Filters from "@/app/search/Filters/page";
import { fetchCategories } from "@/api/fetchCategories";

interface SearchPageParams {
  searchParams: {
    category: string;
  };
}

const SearchPage = async (props: SearchPageParams) => {
  const categories = await fetchCategories();

  const activeCategory = props.searchParams.category || "";
  const selectedCategoryId =
    categories.find(
      (r) =>
        r.name.toLowerCase() ===
        activeCategory.toLowerCase().replaceAll("_", " ")
    )?.id || 0;


  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <Filters categories={categories} />
        </div>
        <div className="w-full">
          <ProductsList selectedCategoryId={selectedCategoryId} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

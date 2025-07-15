import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../../types/product";
import type { AppDispatch, RootState } from "../../redux/store";
import { fetchSuggestions, setIsVisible } from "../../redux/suggestionSlice";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import ProductError from "../Error/ProductError";
import ProductCard from "./ProductCard";
import Empty from "../../Empty/Empty";

interface SuggestedProductsProps {
  onFavorite: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  isFavourite: (product: Product) => boolean;
}

const SuggestProduct = ({
  onFavorite,
  onViewDetails,
  isFavourite,
}: SuggestedProductsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    suggestions,
    isLoading: isSuggestionsLoading,
    error: suggestionsError,
    isVisible: suggestionIsVisible,
  } = useSelector((state: RootState) => state.suggestion);

  const handleFetchSuggestions = () => {
    const userId = "1";
    dispatch(fetchSuggestions(userId));
    dispatch(setIsVisible(true));
  };

  return (
    <>
      <div className="col-span-full md:mb-6">
        <button
          onClick={handleFetchSuggestions}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all cursor-pointer"
        >
          Gợi ý sản phẩm phù hợp
        </button>
        {suggestionIsVisible && (
          <button
            onClick={() => dispatch(setIsVisible(false))}
            className="ml-4 px-4 py-2 rounded-lg font-medium bg-red-100 text-red-700 hover:bg-red-200 transition cursor-pointer "
          >
            Xóa gợi ý
          </button>
        )}
      </div>

      {isSuggestionsLoading && (
        <div className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      )}
      {suggestionsError && <ProductError />}

      {suggestionIsVisible ? (
        suggestions.length > 0 ? (
          <>
            <h2 className="col-span-full text-xl font-semibold">
              Sản phẩm phù hợp
            </h2>
            {suggestions.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavourite={isFavourite(product)}
                onFavorite={onFavorite}
                onViewDetails={onViewDetails}
              />
            ))}
          </>
        ) : (
          <Empty message="Không thể lấy gợi ý lúc này" />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default SuggestProduct;

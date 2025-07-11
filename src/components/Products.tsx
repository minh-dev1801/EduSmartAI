import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../thunks/productThunk";
import { clearSuggestions, fetchSuggestions } from "../redux/suggestionSlice";
import type { Product } from "../types/product";
import ProductModal from "./Modal/ProductModal";
import { setFavorite, deleteFavourite } from "../redux/favoriteSlice";
import ProductCard from "./Product/ProductCard";
import { setHistory } from "../redux/historySlice";
import ProductSkeleton from "./Skeleton/ProductSkeleton";
import ProductError from "./Error/ProductError";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isLoading, error } = useSelector(
    (state: RootState) => state.product
  );
  const {
    suggestions,
    isLoading: isSuggestionsLoading,
    error: suggestionsError,
  } = useSelector((state: RootState) => state.suggestion);

  const searchTerm = useSelector((state: RootState) => state.search.term);
  const priceRange = useSelector(
    (state: RootState) => state.priceFilter.selectedRange
  );
  const favouriteProducts = useSelector(
    (state: RootState) => state.favorite.items
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleFetchSuggestions = () => {
    const userId = "1";
    dispatch(fetchSuggestions(userId));
  };

  let filteredProducts = items;
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (priceRange) {
    filteredProducts = filteredProducts.filter((item) => {
      const price = item.price;
      if (priceRange === "<500K") return price < 500000;
      if (priceRange === "500K-1M") return price >= 500000 && price <= 1000000;
      if (priceRange === ">1M") return price > 1000000;
    });
  }

  const handleViewDetails = (product: Product) => {
    dispatch(setHistory(product));
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleIsFavourite = (product: Product) =>
    !!favouriteProducts.find((item) => item.id === product.id);

  const handleFavoriteProduct = (product: Product) => {
    const isFavourite = handleIsFavourite(product);
    if (!isFavourite) {
      toast.success("🦄 Bạn đã thích một sản phẩm !!!");
      dispatch(setFavorite(product));
    } else {
      toast.info("🦄 Bạn đã bỏ thích một sản phẩm !!!");
      dispatch(deleteFavourite(product));
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) return <ProductError />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      <div className="col-span-full md:mb-6">
        <button
          onClick={handleFetchSuggestions}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all cursor-pointer"
        >
          Gợi ý sản phẩm phù hợp
        </button>
        {suggestions.length > 0 && (
          <button
            onClick={() => dispatch(clearSuggestions())}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer"
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

      {suggestions.length > 0 && (
        <>
          <h2 className="col-span-full text-xl font-semibold mb-4">
            Sản phẩm gợi ý
          </h2>
          {suggestions.map((product) => {
            const isFavourite = handleIsFavourite(product);
            return (
              <ProductCard
                key={product.id}
                product={product}
                isFavourite={isFavourite}
                onFavorite={handleFavoriteProduct}
                onViewDetails={handleViewDetails}
              />
            );
          })}
        </>
      )}

      {filteredProducts.map((product) => {
        const isFavourite = handleIsFavourite(product);
        return (
          <ProductCard
            key={product.id}
            product={product}
            isFavourite={isFavourite}
            onFavorite={handleFavoriteProduct}
            onViewDetails={handleViewDetails}
          />
        );
      })}

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../thunks/productThunk";
import type { Product } from "../types/product";
import ProductModal from "./Modal/ProductModal";
import { fetchFavourite } from "../redux/favoriteSlice";
import ProductCard from "./Product/ProductCard";
import { setHistory } from "../redux/historySlice";
import ProductSkeleton from "./Skeleton/ProductSkeleton";
import ProductError from "./Error/ProductError";
import { toast } from "react-toastify";
import SuggestProduct from "./Product/SuggestProduct";
import {
  deleteSuggest,
  fetchSuggestions,
  postSuggest,
} from "../redux/suggestionSlice";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    items: products,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.product);

  const { suggestions, isVisible: suggestionIsVisible } = useSelector(
    (state: RootState) => state.suggestion
  );

  const searchTerm = useSelector((state: RootState) => state.search.term);
  const priceRange = useSelector(
    (state: RootState) => state.priceFilter.selectedRange
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const userId = "1";
    dispatch(fetchProduct());
    dispatch(fetchFavourite(userId));
    dispatch(fetchSuggestions(userId));
  }, [dispatch]);

  let filteredProducts = products;
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

  const handleIsFavourite = (product: Product) => {
    return !!suggestions.find((item) => +item.id === +product.id);
  };

  const handleFavoriteProduct = (product: Product) => {
    const isFavourite = handleIsFavourite(product);
    if (!isFavourite) {
      toast.success("Bạn đã thích một sản phẩm !!!");
      dispatch(postSuggest([product]));
    } else {
      toast.info("Bạn đã bỏ thích một sản phẩm !!!");
      dispatch(deleteSuggest(String(product.id)));
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
      <SuggestProduct
        onFavorite={handleFavoriteProduct}
        onViewDetails={handleViewDetails}
        isFavourite={handleIsFavourite}
      />

      {!suggestionIsVisible &&
        filteredProducts.map((product) => {
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

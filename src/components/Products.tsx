import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../thunks/productThunk";
import { clearSuggestions, fetchSuggestions } from "../redux/suggestionSlice";
import type { Product } from "../types/product";
import ProductModal from "./Modal/ProductModal";
import { setFavorite } from "../redux/favoriteSlice";
import { FaHeart } from "react-icons/fa";

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
      return true;
    });
  }

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFavoriteProduct = (product: Product) => {
    dispatch(setFavorite(product));
  };

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="col-span-full mb-6">
        <button
          onClick={handleFetchSuggestions}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Gợi ý sản phẩm phù hợp
        </button>
        {suggestions.length > 0 && (
          <button
            onClick={() => dispatch(clearSuggestions())}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Xóa gợi ý
          </button>
        )}
      </div>

      {isSuggestionsLoading && <p>Đang tải gợi ý...</p>}
      {suggestionsError && <p>Lỗi gợi ý: {suggestionsError}</p>}

      {suggestions.length > 0 && (
        <>
          <h2 className="col-span-full text-xl font-semibold mb-4">
            Sản phẩm gợi ý
          </h2>
          {suggestions.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-4 rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 truncate">{product.description}</p>

                <button
                  onClick={() => handleViewDetails(product)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white py-2 px-4 rounded"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {filteredProducts.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-white shadow rounded-2xl relative"
          >
            <button
              onClick={() => handleFavoriteProduct(product)}
              className="absolute right-0 top-0 text-xl text-red-600 transition hover:text-red-500 cursor-pointer p-4"
            >
              <FaHeart />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4 rounded-t-2xl "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex">
                <button
                  onClick={() => handleViewDetails(product)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white py-2 px-4 rounded"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default Products;

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import ProductModal from "../components/Modal/ProductModal";
import ProductError from "../components/Error/ProductError";
import { fetchHistory } from "../thunks/historyThunk";


const History = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: history,
    isLoading: historyLoading,
    error: historyError,
  } = useSelector((state: RootState) => state.history);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const userId = "1";
    dispatch(fetchHistory(userId));
  }, [dispatch]);

  if (historyLoading) {
    return (
      <div className="container mx-auto px-4 mb-4 md:mb-10">
        <h2 className="mt-20 text-xl font-semibold">Lịch sử sản phẩm</h2>
        <div className="mt-2 h-[1px] bg-gray-300 rounded mb-4 md:mb-10"></div>
        {Array.from({ length: 1 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow border border-gray-300 rounded-2xl mb-4"
          >
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (historyError) return <ProductError />;

  return (
    <div className="container mx-auto px-4 mb-4 md:mb-10">
      <h2 className="mt-20 text-xl font-semibold">Lịch sử sản phẩm</h2>
      <div className="mt-2 h-[1px] bg-gray-300 roudned mb-4 md:mb-10"></div>
      {history.length > 0 ? (
        <>
          {history.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow border border-gray-300 rounded-2xl"
            >
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
      ) : (
        <>Chưa có sản phẩm</>
      )}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};
export default History;

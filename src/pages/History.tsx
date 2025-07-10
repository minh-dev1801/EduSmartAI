import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState } from "react";
import type { Product } from "../types/product";
import ProductModal from "../components/Modal/ProductModal";

const History = () => {
  const historyList = useSelector((state: RootState) => state.history.items);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="mt-20 text-xl font-semibold">Lịch sử sản phẩm</h2>
      <div className="mt-2 border border-black roudned mb-10"></div>
      {historyList.length > 0 ? (
        <>
          {historyList.map((product) => (
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
        <>Chưa có lịch sử sản phẩm</>
      )}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};
export default History;

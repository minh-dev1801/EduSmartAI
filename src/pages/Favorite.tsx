import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState } from "react";
import type { Product } from "../types/product";
import ProductModal from "../components/Modal/ProductModal";

const Favorite = () => {
  const favourite = useSelector((state: RootState) => state.favorite.items);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="mt-20 text-xl font-semibold mb-4">Sản phẩm yêu thích</h2>
      <div className="mt-4 border border-gray-300 roudned mb-4"></div>
      {favourite.length > 0 ? (
        <>
          {favourite.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-2xl">
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
        <>Chưa có sản phẩm yêu thích</>
      )}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};
export default Favorite;

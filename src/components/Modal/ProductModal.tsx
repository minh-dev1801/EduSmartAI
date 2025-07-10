import React from "react";
import type { Product } from "../../types/product";
import { MdClose } from "react-icons/md";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  console.log({ product });
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/75 transition-opacity flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-red-500 text-2xl transition cursor-pointer hover:ring-2 hover:ring-blue-500 rounded-full"
          >
            <MdClose />
          </button>
        </div>
        <div className="mt-4">
          <img src={product.image} alt={product.name} className="rounded-md" />
          <p className="text-black mt-4 text-xl font-semibold">
            {product.description}
          </p>
          <p className="text-green-600 font-bold mt-2">{product.price} VNĐ</p>
          <div className="mt-1">
            <h3 className="text-lg font-medium text-yellow-600">
              Đánh giá ({product.rating}/5)
            </h3>
            <ul className="mt-1">
              {product.reviews.map((review, index) => (
                <li key={index} className="text-gray-600">
                  - {review}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-10 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 cursor-pointer transition-all duration-200 "
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import { FaHeart } from "react-icons/fa";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  isFavourite: boolean;
  onFavorite: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({
  product,
  isFavourite,
  onFavorite,
  onViewDetails,
}: ProductCardProps) => {
  return (
    <div className="bg-white shadow rounded-2xl relative">
      <button
        onClick={() => onFavorite(product)}
        className={`absolute right-0 top-0 text-xl ${
          isFavourite ? "text-red-500" : "text-gray-200 hover:text-gray-300"
        } transition-all hover:scale-125 cursor-pointer p-4`}
      >
        <FaHeart />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-4 rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 truncate">{product.description}</p>
        <button
          onClick={() => onViewDetails(product)}
          className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white py-2 px-4 rounded"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../thunks/productThunk";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isLoading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => {
        return (
          <div key={product.id} className="bg-white shadow rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4 rounded-t-2xl "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white py-2 px-4 rounded">
                Xem chi tiết
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

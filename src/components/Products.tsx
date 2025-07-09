const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    description: "Mô tả ngắn về sản phẩm 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    description: "Mô tả ngắn về sản phẩm 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    description: "Mô tả ngắn về sản phẩm 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    description: "Mô tả ngắn về sản phẩm 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    description: "Mô tả ngắn về sản phẩm 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Sản phẩm 6",
    description: "Mô tả ngắn về sản phẩm 6",
    image: "https://via.placeholder.com/150",
  },
  // Thêm sản phẩm nếu cần
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        return (
          <div key={product.id} className="bg-gray-200 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Mua ngay
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

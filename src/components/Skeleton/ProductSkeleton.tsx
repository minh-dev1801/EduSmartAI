const ProductSkeleton = () => {
  return <div className="border rounded-2xl p-4 bg-white shadow animate-pulse">
    <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4"></div>
    <div className="h-6 bg-gray-200 rounded-2xl w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded-2xl w-[25%]"></div>
  </div>;
};

export default ProductSkeleton;

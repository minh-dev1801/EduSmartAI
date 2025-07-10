const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded w-[25%]"></div>
    </div>
  );
};

export default ProductSkeleton;

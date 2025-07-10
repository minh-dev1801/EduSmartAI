import PriceFilter from "../components/PriceFilter";
import Products from "../components/Products";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Search />
      <div className="mt-10">
        <div className="flex mb-5 gap-10">
          <h1 className="text-2xl font-semibold">Khóa học</h1>
          <PriceFilter />
        </div>
        <Products />
      </div>
    </div>
  );
};
export default Home;

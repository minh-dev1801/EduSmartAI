import Products from "../components/Products";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-10">
        <Search/>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold mb-5">Khóa học</h1>
        <Products />
      </div>
    </div>
  );
};
export default Home;

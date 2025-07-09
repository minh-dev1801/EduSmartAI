import { useRoutes } from "react-router";
import { routes } from "./routes";
const AllRoute = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};
export default AllRoute;

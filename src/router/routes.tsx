import { Layout } from "../layout/layout";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favourite-product",
        element: <Favorite />,
      },
    ],
  },
];

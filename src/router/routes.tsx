import { Layout } from "../layout/layout";
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
    ],
  },
];

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;

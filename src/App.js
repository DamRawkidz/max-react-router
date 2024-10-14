import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsePage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsePage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsePage />,
      },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

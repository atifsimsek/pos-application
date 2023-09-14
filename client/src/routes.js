import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";

export const routes = [
  { path: "/", name: "Home", exact: true, element: <Homepage /> },
  { path: "/cart", name: "Home", exact: true, element: <CartPage /> },
];

import React, { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
const CartPage = lazy(() => import("./pages/CartPage"));

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    name: "Cart",
    exact: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CartPage />
      </Suspense>
    ),
  },
];

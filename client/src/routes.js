import React, { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const BillPage = lazy(() => import("./pages/BillPage"));
const CustomerPage = lazy(() => import("./pages/CustomerPage"));

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
  {
    path: "/bills",
    name: "Bill",
    exact: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BillPage />
      </Suspense>
    ),
  },
  {
    path: "/customers",
    name: "Customer",
    exact: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerPage />
      </Suspense>
    ),
  },
];

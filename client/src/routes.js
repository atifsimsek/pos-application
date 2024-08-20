import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const BillPage = lazy(() => import("./pages/BillPage"));
const CustomerPage = lazy(() => import("./pages/CustomerPage"));
const Statistics = lazy(() => import("./pages/Statistics"));
const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));

const isAuthenticated = () => {
  return !!localStorage.getItem("posUser");
};

const PublicRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Homepage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/cart",
    name: "Cart",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CartPage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/product",
    name: "Product",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/bills",
    name: "Bill",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BillPage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/customers",
    name: "Customer",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CustomerPage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/statistics",
    name: "Statistics",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Statistics />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/register",
    name: "Register",
    exact: true,
    element: (
      <PublicRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    element: (
      <PublicRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
    ),
  },
];

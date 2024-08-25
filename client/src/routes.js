import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Loader from "./components/Loader";

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

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    element: (
      <PrivateRoute
        element={
          <SuspenseWrapper>
            <Homepage />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <CartPage />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <ProductPage />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <BillPage />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <CustomerPage />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <Statistics />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
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
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        }
      />
    ),
  },
];

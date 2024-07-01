import { apiClient } from "./apiClient";

export const getProducts = async () => {
  const response = await apiClient.get("/api/products/get-all");
  return response.data;
};

export const addProduct = async (newProduct) => {
  const response = await apiClient.post(
    "/api/products/add-product",
    newProduct
  );
  return response.data;
};

export const updateProduct = async ({ productId, values }) => {
  const response = await apiClient.put("/api/products/update-product", {
    productId,
    ...values,
  });
  return response.data;
};
export const deleteProduct = async (productId) => {
  const response = await apiClient.delete("/api/products/delete-product", {
    data: { productId },
  });
  return response.data;
};

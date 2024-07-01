import { apiClient } from "./apiClient";

export const getCategories = async () => {
  const response = await apiClient.get("/api/categories/get-all");
  return response.data;
};

export const addCategory = async (newCategory) => {
  const response = await apiClient.post(
    "/api/categories/add-category",
    newCategory
  );
  return response.data;
};

export const updateCategory = async ({ categoryId, title }) => {
  const response = await apiClient.put("/api/categories/update-category", {
    categoryId,
    title,
  });
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const response = await apiClient.delete("/api/categories/delete-category", {
    data: { categoryId },
  });
  console.log(response);
  return response.data;
};

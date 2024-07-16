import { apiClient } from "./apiClient";

export const getBills = async () => {
  const response = await apiClient.get("/api/bills/get-all");
  return response.data;
};

export const createBill = async (newCategory) => {
  const response = await apiClient.post("/api/bills/add-bill", newCategory);
  return response.data;
};

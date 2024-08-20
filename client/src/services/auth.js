import { apiClient } from "./apiClient";

export const register = async (newUser) => {
  const response = await apiClient.post("/api/auth/register", newUser);
  return response.data;
};

export const login = async (user) => {
  const response = await apiClient.post("/api/auth/login", user);
  return response.data;
};

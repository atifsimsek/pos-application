import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

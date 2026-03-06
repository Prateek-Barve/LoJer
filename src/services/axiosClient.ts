import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://japi-dec2dpgebbdjg8fx.centralindia-01.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: future auth token support
axiosClient.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
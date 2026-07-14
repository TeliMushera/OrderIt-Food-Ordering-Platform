//centeralized API setup

import axios from "axios";
import qs from "qs";

const baseURL =
  import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL !== "undefined"
    ? `${import.meta.env.VITE_API_URL}/api`
    : "/api";

const api = axios.create({
  baseURL,
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", token);
    }
  } else {
    delete api.defaults.headers.common.Authorization;
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
    }
  }
};

if (typeof window !== "undefined") {
  const savedToken = window.localStorage.getItem("token");
  if (savedToken) {
    setAuthToken(savedToken);
  }
}

export default api;

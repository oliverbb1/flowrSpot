import axios from "axios";

export const API = axios.create({
  baseURL: "http://flowrspot-api.herokuapp.com/api/v1",
});

API.interceptors.request.use(function (request) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

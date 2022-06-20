import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default http;
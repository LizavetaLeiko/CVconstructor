import axios from "axios";

export const backend = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});

backend.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

backend.interceptors.response.use((config) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry ) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get(`http://localhost:8000/api/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          return backend.request(originalRequest);
      } catch (e) {
        console.log(e)
      }
  }
  throw error;
}) 
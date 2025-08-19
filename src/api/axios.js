import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add a request interceptor to automatically attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
);

export default api
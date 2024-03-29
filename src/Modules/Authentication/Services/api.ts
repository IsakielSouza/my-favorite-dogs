import axios from "axios";

import { AppError } from "@Utils/AppError";

const api = axios.create({
  baseURL: 'https://api-jwt-jl1g.onrender.com'
});

api.interceptors.response.use((response) => response, (error) => {
  if(error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message))
  } else {
    return Promise.reject(error)
  }
  
})

export { api };
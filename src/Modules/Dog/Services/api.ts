import axios from "axios";

import { AppError } from "@Utils/AppError";

const api_key = 'live_4AezwytcjrSRZJZbdGfmRtnY3nj9wkaE1o0D1tS7fFPzhMlePrBi8UFkGk8CMq0h'

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': api_key,
}

const api = axios.create({
  baseURL: 'https://api.thedogapi.com/v1'
});

api.interceptors.response.use((response) => response, (error) => {
  if(error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message))
  } else {
    return Promise.reject(error)
  }
  
})

export { api, headers };
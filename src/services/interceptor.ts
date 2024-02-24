import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
})

AxiosInstance.interceptors.request.use(async (config) => {
  let token = sessionStorage.getItem("accessToken")
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
    return config
  } else {
    return config
  }
})

export default AxiosInstance

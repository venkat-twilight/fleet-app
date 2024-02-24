import AxiosInstance from "./interceptor"

const Interface = {
  async get(path: any, params: any) {
    let api = await AxiosInstance.get(path, params)
    return api
  },

  async post(path: any, payload: any) {
    let api = await AxiosInstance.post(path, payload)
    return api
  },

  async put(path: any, payload: any) {
    let api = await AxiosInstance.put(path, payload)
    return api
  },
}

export default Interface

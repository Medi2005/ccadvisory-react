import { axiosClient } from "../../api/axios";



const clientApi = {
  login: async (email, password) => {
    return await axiosClient.post("/login", { email, password });
  },
  getCsrf: async () => {
    return await axiosClient.get("/sanctum/csrf-cookie");
  },
  getUser: async () => {
    return await axiosClient.get('/api/client')
  }
};
export default clientApi;
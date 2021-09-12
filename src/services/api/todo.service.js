import axiosClient from "../AxiosClient";

const path = "todos";

const todoService = {
  getAllTodo: () => {
    return axiosClient.get(path);
  },
  createTodo: (data) => {
    return axiosClient.post(path, data);
  },
};
export default todoService;

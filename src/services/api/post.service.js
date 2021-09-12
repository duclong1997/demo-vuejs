import axiosClient from "../AxiosClient";

const path = "posts";

const postService = {
  getAllPost: () => {
    return axiosClient.get(path);
  },
  createPost: (data) => {
    return axiosClient.post(path, data);
  },
};
export default postService;

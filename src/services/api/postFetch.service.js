import { GET, POST } from "../../utils/method-common.constant";
import { FetchCommonService } from "../FetchCommon.service";

const path = "posts";

const postFetchService = {
  getAllPost: async () => {
    return await FetchCommonService(GET, path);
  },

  createPost: (data) => {
    return FetchCommonService(POST, path, data);
  },
};

export default postFetchService;

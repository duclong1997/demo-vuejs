import accountService from "./api/account.service";
import postService from "./api/post.service";
import todoService from "./api/todo.service";

const services = {
  post: postService,
  account: accountService,
  todo: todoService,
};

export const FactoryService = {
  get: (name) => services[name],
};

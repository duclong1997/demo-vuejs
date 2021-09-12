import postFetchService from "./api/postFetch.service";

const services = {
  post: postFetchService,
};

export const FactoryFetchService = {
  get: (name) => services[name],
};

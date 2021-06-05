import _axios from "axios";

const axios = (url) => {
  const instance = _axios.create({
    baseURL: url || "https://api.opensea.io/api/v1/",
    timeout: 10000,
  });

  return instance;
};

export { axios };
export default axios();

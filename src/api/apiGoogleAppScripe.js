import axios from "axios";

// 共通処理
const gasScript = axios.create({
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

// interceptors = Gasの中にerrorが含まれていたらrejectする
gasScript.interceptors.response.use(
  (res) => {
    if (res.data.error) {
      return Promise.reject(res.data.error);
    }
    return Promise.resolve(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

const setUrl = (url) => {
  gasScript.defaults.baseURL = url;
};

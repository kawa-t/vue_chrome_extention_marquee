import axios from "axios";

//共通処理
const gasScript = axios.create({
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

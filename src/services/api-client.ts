import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d92380d5b614f0299951b7cea8800b0",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c39d644d8624f22b2cc8101cc3960e4",
  },
});

import axios from "axios";

const corsUrl = "https://cors-server-proxy.herokuapp.com/";

const apiUrl = "https://api.itbook.store/1.0/";
const baseUrl = corsUrl + apiUrl;

const Axios = axios.create({
  baseURL: baseUrl,
  headers: {
    origin: "*",
  },
});

export default Axios;
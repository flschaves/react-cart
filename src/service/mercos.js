import axios from "axios";

// const corsURL = "https://cors-anywhere.herokuapp.com/";
// const corsURL = "https://thingproxy.freeboard.io/fetch/";

export default axios.create({
  baseURL: `https://5f2c373bffc88500167b8cce.mockapi.io/`,
});

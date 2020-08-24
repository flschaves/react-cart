import axios from "axios";

// const corsURL = "https://cors-anywhere.herokuapp.com/";
const corsURL = "https://thingproxy.freeboard.io/fetch/";

export default axios.create({
  baseURL: `${corsURL}https://sandbox.mercos.com/api-teste-front/`,
});

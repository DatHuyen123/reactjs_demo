import axios from "axios";
import * as config from "./../service/config";

export default function callAPI(endpoint, method = "GET", body) {
  const token = sessionStorage.getItem("token");
  const tokenAdmin = sessionStorage.getItem("tokenAdmin");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token || tokenAdmin) {
    headers.Authorization = tokenAdmin
      ? "Bearer " + JSON.parse(tokenAdmin)
      : "Bearer " + JSON.parse(token);
  }
  return axios({
    method: method,
    url: `${config.API_URL}/${endpoint}`,
    data: body,
    headers: headers,
  });
  // .catch(err => {
  //     console.log(err);
  // });
}

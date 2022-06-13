import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/v1/";
const APP_ID = "62a46fb926795c42ebcb93e0";

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: { "app-id": APP_ID },
});

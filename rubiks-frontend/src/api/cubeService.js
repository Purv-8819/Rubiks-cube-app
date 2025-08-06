import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const pingBackend = async () => {
  const res = await axios.get(`${BASE_URL}/ping`);
  return res.data;
};

import axios, { AxiosInstance } from "axios";
import { BACKEND_BASE_URL } from "../constant/env";

const request: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export default request;

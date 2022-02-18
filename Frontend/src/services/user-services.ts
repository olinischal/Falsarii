import axios from "axios";
import AuthHeader from "./authentication-header";
const API_URL = "http://localhost:8080/member/";
export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: AuthHeader() });
};
export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: AuthHeader() });
};
export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: AuthHeader() });
};
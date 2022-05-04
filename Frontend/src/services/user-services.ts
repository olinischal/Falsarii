import axios from "axios";
import AuthHeader from "./authentication-header";
const API_URL = "http://ec2-3-145-177-24.us-east-2.compute.amazonaws.com:8080/member/";
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

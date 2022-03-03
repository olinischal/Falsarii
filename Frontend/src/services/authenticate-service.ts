import axios from "axios";
const API_URL = "http://localhost:8080/member/";
export const register = (firstName:string, lastName:string, phoneNumber:string, email: string, password: string) => {
  
  // let userDetail;
  return axios.post(API_URL + "add", {    
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  }).then((response)=> {
    
    
    // userDetail = response.data;
    
  });
};
export const signIn = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        
        localStorage.setItem("user", JSON.stringify(response.data ));
      }
      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {return JSON.parse(userStr)};
  return null;
};

export const getMember = (id) =>{
  return axios
    .get(API_URL + "getMember/" +parseInt(`${id}`)) 
    .then((response)=> {
      console.log(response + "error is here");
    });
};
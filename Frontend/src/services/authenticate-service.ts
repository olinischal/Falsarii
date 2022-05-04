import axios from "axios";

const API_URL = "http://ec2-3-145-177-24.us-east-2.compute.amazonaws.com:8080/member/";

export const register = (firstName:string, maidenName:string, lastName:string, phoneNumber:string, email: string,  password: string, captchaResponse:string) => {
  

  return axios.post(API_URL + "add", {    
    firstName,
    maidenName,
    lastName,
    phoneNumber,
    email,
    
    password,
    captchaResponse
  }).then((response)=> {
    if(!(String(response.data.message)=== 'User registered successfully!')){
      localStorage.setItem("signupError",(response.data));
    }
    return response;
  })
  
  ;
};



export const signIn = (email: string, password: string) => {

 

  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
       
      if (response.data.accessToken) {
        localStorage.removeItem("badCredential");
        localStorage.removeItem("otherError");
        localStorage.removeItem("serverError");
        localStorage.setItem("user", JSON.stringify(response.data ));

        localStorage.setItem("userEmail",(response.data.email));

      }
      else {
        throw new Error("Server can't be reached.");
    }

      
    return (response.data);
    })
    .catch(function (error) {
      console.log(error.response.status) // 401
      console.log(error.response.data.error) //Please Authenticate or whatever returned from server
      localStorage.setItem("otherError", "Some Error Occured, Please try again!"); 
      if(error.response.status==401){ 
        localStorage.setItem("badCredential","Bad Credentials Please try again!");
      }
      else {
        localStorage.setItem("otherError", "Some Error Occured, Please try again!");      
      }
    
  })
    ;
    
    
};

export const logout = () => {
  localStorage.removeItem("user");

  localStorage.removeItem("data");
  localStorage.removeItem("scholarship");
  localStorage.removeItem("userAuth");

  localStorage.removeItem("userEmail");
  localStorage.removeItem("event");
}


export const sendEmail = (subject:String, text:string, emailList:string[]) =>{
  return axios.post("http://ec2-3-145-177-24.us-east-2.compute.amazonaws.com:8080/sendEmail", {    
    subject,
    text,
    emailList
  }).then((response)=> {
    if(!(String(response.data.message)=== 'email successfully sent')){
      localStorage.setItem("emailError",(response.data));
    }
    return response;
  })
  
  ;
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
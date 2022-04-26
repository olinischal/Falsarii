import { useState, createContext, useEffect } from "react";

function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      
    }
  }
  
  function getLocalStorage(key, {}) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : {};
    } catch (e) {
      
      return {};
    }
  }
 

type AuthUser = {
    children: React.ReactNode
}

const Authenticate = createContext({});

export const AuthUser = ({ children,  } : AuthUser) => {
    const [auth, setAuth] = useState(()=> getLocalStorage("userAuth", {}));

    // store all the user info in the local storage in data key
    const [userDetail, setUserDetail] = useState(()=> getLocalStorage("data", {data: "", }));

    //while Updating user profile submit state stores the 'submit' event handler
    const [submit, setSubmit] = useState<boolean>(false);

    //Scholarship state of each scholarship
    const [scholarshipDetail, setScholarshipDetail] = useState({});

    

    useEffect(() => {
        setLocalStorage("userAuth", auth);
      }, [auth]);

      useEffect(() => {
        setLocalStorage("data", userDetail);
      }, [userDetail]);
    
    

    return (
        <Authenticate.Provider value={{ auth, setAuth, userDetail, setUserDetail, submit, setSubmit, 
        scholarshipDetail, setScholarshipDetail }}>
        {children}
    </Authenticate.Provider>
    
        
    );
    
}



export default Authenticate;
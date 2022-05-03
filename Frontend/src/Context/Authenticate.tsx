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

    const [userDetail, setUserDetail] = useState(()=> getLocalStorage("data", {data: "", }));

    const [submit, setSubmit] = useState<boolean>(false);

    const [scholarshipDetail, setScholarshipDetail] = useState(()=> getLocalStorage("scholarship", {}));

    const[eventDetail, setEventDetail] = useState(() => getLocalStorage("event", {}));

    const [donateStatus, setDonateStatus] = useState<boolean>(false);

    useEffect(() => {
        setLocalStorage("userAuth", auth);
      }, [auth]);

      useEffect(() => {
        setLocalStorage("data", userDetail);
      }, [userDetail]);

      useEffect(() =>{
        setLocalStorage("scholarship", scholarshipDetail);
      }, [scholarshipDetail]);
    
    

    return (
        <Authenticate.Provider value={{ auth, setAuth, userDetail, setUserDetail, submit, setSubmit, 
        scholarshipDetail, setScholarshipDetail, eventDetail, setEventDetail, donateStatus, setDonateStatus }}>
        {children}
    </Authenticate.Provider>
    
        
    );
    
}



export default Authenticate;
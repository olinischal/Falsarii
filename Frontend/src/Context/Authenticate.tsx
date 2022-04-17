import { useState, createContext } from "react";

type AuthProvider = {
    children: React.ReactNode
}

const Authenticate = createContext({});

export const AuthProvider = ({ children,  } : AuthProvider) => {
    const [auth, setAuth] = useState({});

    return (
        <Authenticate.Provider value={{ auth, setAuth }}>
        {children}
    </Authenticate.Provider>
    
        
    );
    
}



export default Authenticate;
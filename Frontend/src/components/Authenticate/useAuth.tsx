import { useContext } from "react";
import Authenticate from "../../Context/Authenticate";

const UseAuth = () => {
    return useContext(Authenticate);
}

export default UseAuth;
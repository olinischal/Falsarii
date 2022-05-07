import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { GetUserGroup } from "../../services/api";
import GroupData from "../../types/Group";

const UserGroupsList = () => {
    const {userDetail}: any = useContext(Authenticate);
    const [userGroups, setUserGroups] = useState<GroupData[]>([]);

    useEffect(()=> {
        GetUserGroup(userDetail.userId)
        .then((response) => {
          
       
          setUserGroups(response.data);
          
          
        })
        .catch((error) => {
          console.log("Could not retrieve User Group.", error);
        });
    
       },[]);
      

    return (
      <>
       {
         userGroups.map((val, key) =>{
           return (
            <li key={key} style={{display : 'inline-block', margin: '0 10px'}}>{val.groupName}</li>
           );
         })
       } 
       </>
       
       );


    }
export default UserGroupsList;
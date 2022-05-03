import { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

import Authenticate from "../../Context/Authenticate";

import { GetUserGroup, GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";
import {JoinGroup} from "../../services/api";





const GroupList  = () => {
  const {userDetail}: any  = useContext(Authenticate);
      
  const {submit} : any = useContext(Authenticate);
  const [groups, setGroups] = useState<GroupData[]>([]);
  

  const [selectGroup, setSelectGroup] = useState(" ");


  useEffect(() => {
    GroupRequests.getGroups()
      .then((response) => {
        setGroups([...response]);
        
        
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);



  const handleChange = (e) => {
    
    setSelectGroup(e.target.value);   

    console.log(userDetail.emailId, "Is the email and The new value is ", selectGroup);
    
  }

  

  if (submit === true) {
    
    console.log("The name of selected group is ", selectGroup);
    JoinGroup(userDetail.emailId, selectGroup).then((response) => {      
     console.log("successfully added to the group ", response);
    })
    .catch((error) => {
      console.log("User was not added to the group.", error);
    });

    
  }

  /*
  GetUserGroup(userDetail.emailId)
    .then((response) => {
      console.log(response);
      
      
    })
    .catch((error) => {
      console.log("Could not retrieve User Group.", error);
    });

*/

  

  return (
    <div>
  
      <label>
            <select defaultValue={'DEFAULT'} onChange={handleChange}>
            {groups.map((option, key) => (
            <option key ={key} value={option.groupName} >{option.groupName}</option>
          ))}


            </select>
    
  
</label>
    </div>
  );
};

export default GroupList;

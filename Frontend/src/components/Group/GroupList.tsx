import { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

import Authenticate from "../../Context/Authenticate";

import { GetUserGroup, GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";
import {JoinGroup} from "../../services/api";
import GetGroups from "./UserGroupList";
import UserListOfGroups from "./UserListOfGroups";





const GroupList  = () => {
  const {userDetail}: any  = useContext(Authenticate);
      
  const {submit} : any = useContext(Authenticate);
  const [groups, setGroups] = useState<GroupData[]>([]);

  const {setAllGroupList}: any = useContext(Authenticate); 
  

  const [selectGroup, setSelectGroup] = useState<GroupData>({
  
    groupName: " ",
    year: " ",
    noOfMembers: 0,
  });


  useEffect(() => {
    GroupRequests.getGroups()
      .then((response) => {
        setGroups([...response]);
        setAllGroupList([...response]);
        
        
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);


   
  const handleChange = (e) => {
    
    let grpName = e.target.value;
    groups.forEach(val => {
      if(val.groupName === grpName){
        setSelectGroup(val);
      }
    })
      

   
    
  }

  if (submit === true) {
    
    console.log("The name of selected group is ", selectGroup);
    JoinGroup(userDetail.userId, selectGroup.groupId).then((response) => {      
     console.log("successfully added to the group ", response);
    })
    .catch((error) => {
      console.log("User was not added to the group.", error);
    });

    
   }
  
 
 

   



  

  return (
    <div>
  

<select className="form-select" aria-label="Default select example" style={{ width : '50%'}} onChange={handleChange}>
  <option selected> </option>
  {groups.map((option, key) => (
            <option key ={key} value={option.groupName} >{option.groupName}</option>
          ))}
</select>

    </div>
  );
};

export default GroupList;

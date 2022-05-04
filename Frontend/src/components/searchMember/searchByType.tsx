import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getUserListByGroups, GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";
import GroupList from "../Group/GroupList";
import UserListOfGroups from "../Group/UserListOfGroups";
import SearchMember from "./searchMember";

const SearchByType = () => {
     
    
    const [groups, setGroups] = useState<GroupData[]>([]);
    const[grpId, setGrpId]= useState<any>();
    const[selectUser, setSelectUsers] = useState<any>([]);
  
    
    
  
    const [selectGroup, setSelectGroup] = useState<GroupData>({
     groupId: 0,
      groupName: " ",
      year: " ",
      noOfMembers: 0,
    });
  
  
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
        
        let grpName = e.target.value;
        groups.forEach(val => {
          if(val.groupName === grpName){
            setSelectGroup(val);
            
          
          }
        })
                 


      }
      
      const handleClick = (e) => {
         setGrpId(selectGroup.groupId);
        

      }

      useEffect(() => {
        getUserListByGroups(grpId)
          .then((res) => {
           setSelectUsers(res);
           console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [grpId]);

      
        
      
    

    

    return (
    
    <div>
                    <select
                      id="form_need"
                      name="need"
                      className="form-control"
                      defaultValue='--Select Your Issue--'
                      data-error="Please specify your need."
                      onChange={handleChange}
                    >
                        <option value=""  disabled>
                       ---- Select Group Name -----
                       </option>
                       <option>     </option>
                       {groups.map((option, key) => (
            <option key ={key} value={option.groupName} >{option.groupName}</option>
          ))}
                    </select>

                    <button onClick={handleClick}>Search Group</button>

                    <SearchMember userList = {selectUser} />
                    

                    

    </div>

    
    
    );
}

export default SearchByType;
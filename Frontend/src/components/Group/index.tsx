import GroupData from "../../types/Group";
import { GroupRequests } from "../../services/api";
import React, {useState, useEffect} from "react";
import GroupList from "./GroupList";
import UserListOfGroups from "./UserListOfGroups";

const Groups = () => {
    const [group, setGroup] = useState<GroupData>({
     
        groupName: " ",
        year: " ",
        noOfMembers: 0,
      });
    const saveGroup = (e) => {
        e.preventDefault();

        GroupRequests.createGroup(group).catch((error) => {
            console.log("Request cannot be completed.", error);
          });
          console.log(group);
          window.location.reload();

    };
    return (
    <>
        <input type="text" onChange={(e) =>
                            setGroup({
                              ...group,
                              groupName: e.target.value,
                            })
                          }placeholder="Enter Group name" />
        <input type="date" onChange={(e) =>
                            setGroup({
                              ...group,
                              year: e.target.value,
                            })
                          }placeholder="Enter Group Year" />

        <button className="btn btn-primary" type="button" onClick={(e) => saveGroup(e)}>
                  Submit
        </button>

        <GroupList />

        
    
    
    
    
    </>);
}


export default Groups;
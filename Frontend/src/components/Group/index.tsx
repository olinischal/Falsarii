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
    

    };
    return (
    <>
     

        <form>
  <div className="form-row align-items-center">
    <div className="col-sm-3 my-1">
     
      <input type="text" className="form-control" id="inlineFormInputName" onChange={(e) =>
                            setGroup({
                              ...group,
                              groupName: e.target.value,
                            })
                          } placeholder="Enter Group Name" />
    </div>
    <div className="col-sm-3 my-1">
      
      <div className="input-group">
       
        <input type="text" className="form-control" id="inlineFormInputGroupUsername" onChange={(e) =>
                            setGroup({
                              ...group,
                              year: e.target.value,
                            })
                          } placeholder="Enter Group Year"/>
      </div>
    </div>
    <div className="col-auto my-1">
      
    </div>
    <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary" onClick={(e) => saveGroup(e)}>Submit</button>
    </div>
  </div>
</form>
<hr />
<br />
<h3> 
  List of All Groups
</h3>
<br />
        <GroupList />

        
    
    
    
    
    </>
    );
}


export default Groups;
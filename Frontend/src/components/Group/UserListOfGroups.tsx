import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getUserListByGroups, GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";


const UserListOfGroups = ({groupName}) => {
    const [userList, setUserList] = useState();
    const [groupList, setGroupList] = useState<GroupData[]>([]);

    
    const {allGroupList}: any = useContext(Authenticate); 

    /** get all the group list created by admin */ 
    useEffect(() => {
        GroupRequests.getGroups()
          .then((response) => {
            setGroupList([...response]);
           
            
            
          })
          .catch((error) => {
            console.log("Something went wrong here.", error);
          });
      }, []);

      let grpIdList;
     groupList.map(val => {
          if(val.groupName === groupName){
            grpIdList = val.groupId;
            return ;
          }
          
      })

    

      console.log(allGroupList);
      
        if(grpIdList !== null){
            getUserListByGroups(grpIdList).then(res => {

                
                
                console.log(res);
            }).catch( e =>{
                console.log(grpIdList);
                console.log(e);
                
            })

        }
      
 
    return (<div>
        

    </div>);

}

export default UserListOfGroups;
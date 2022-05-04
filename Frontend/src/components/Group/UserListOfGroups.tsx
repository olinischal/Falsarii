import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getUserListByGroups, GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";

const UserListOfGroups = ({ groupName }) => {
  const [userList, setUserList] = useState();
  const [groupList, setGroupList] = useState<GroupData[]>([]);

  const { allGroupList }: any = useContext(Authenticate);

  /** get all the group list created by admin */
 
  let grpIdList;
  allGroupList.forEach((val) => {
    if (val.groupName === groupName) {
      grpIdList = val.groupId;
    }
  });

  useEffect(() => {
    getUserListByGroups(grpIdList)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [grpIdList]);

  return <div></div>;
};

export default UserListOfGroups;

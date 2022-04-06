import { useEffect, useState } from "react";
import { GroupRequests } from "../../services/api";
import GroupData from "../../types/Group";

const GroupList = () => {
  const [groups, setGroups] = useState<GroupData[]>([]);

  useEffect(() => {
    GroupRequests.getGroups()
      .then((response) => {
        setGroups([...response]);
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

  return (
    <div>
      {groups.map((val, key) => {
        return (
          <div key = {key}>
            <div>
              Group Name:
              {val.groupName}
            </div>
            <div>
              Group Created Date:
              {val.year}
            </div>
            <div>
              Number of Groups:
              {val.noOfMembers}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupList;

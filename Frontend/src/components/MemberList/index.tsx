import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";
import Profile from "../User/Profile";

const MemberList = () => {
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Member.getMembers()
      .then((data) => {
        setMembers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  const listUsers = members.map((d) => <li key={d.id}>{d.firstName}</li>);
  const user = members.map(d =>  d);
  return (
 
    
    <div>
        Members are
        {listUsers}
        
      </div>
      
            
   
  );
};


export default MemberList;

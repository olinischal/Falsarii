import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../api/api";

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

  const listItems = members.map((d) => <li key={d.id}>{d.firstName}</li>);
  return (
 
    
    <div>
        Members are
        {listItems}
      </div>
            
   
  );
};


export default MemberList;

import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getAllEventDonationUser, getAllMembersOfGroup } from "../../services/api";

const Activity = () => {

    const {userDetail}: any  = useContext(Authenticate);
    const [eventDonation, setEventDonations] = useState<any>([]);
    const {eventDetail}: any = useContext(Authenticate);

    const[eventName, setEventName]= useState<any>([]);

    
    useEffect(() => {
        getAllEventDonationUser(userDetail.userId).then(res => {
           
            setEventDonations(res.data);
            
        }).catch(e => {
            console.log("Cannot obtaint the list of users", e);
        })

    }, []);

    let eventsName: string[] = [];
    for ( var i = 0; i< eventDonation.length; i++){
      for(var j = 0; j < eventDetail.length; j++){
       
        if(Number(eventDonation[i][0]) === eventDetail[j].eventId){
         // console.log(eventDetail[j].eventName);
          eventsName.push(eventDetail[j].eventName);
        }
      }
    }

    

    

    useEffect(() => {
      setEventName(eventsName);
    }, [eventDonation]);
    
    console.log(eventName);

   
   

    
    return (
        <div>
                 <div className="card mb-4" style={{ fontSize:'20px' }}>
            <div className="card-header">Event Activity</div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Event Attending</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {eventName.map((val, key) => {
                      
                      
                    return (
                        <>
                        
                        <p key={key}>{val}</p>
                        </>
                    );
                  })
                  
                  }
                </div>
              </div>
             
            
              

           
            </div>
          </div>



        </div>


    );


}

export default Activity;
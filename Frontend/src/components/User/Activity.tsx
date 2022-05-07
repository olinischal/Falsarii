import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getAllEventDonationUser, getAllMembersOfGroup } from "../../services/api";

const Activity = () => {

    const {userDetail}: any  = useContext(Authenticate);
    const [eventDonation, setEventDonations] = useState<any>([]);
    const {eventDetail}: any = useContext(Authenticate);

    const[eventName, setEventName]= useState<any>();

    console.log(eventDetail);
    useEffect(() => {
        getAllEventDonationUser(userDetail.userId).then(res => {
           
            setEventDonations(res.data);
        }).catch(e => {
            console.log("Cannot obtaint the list of users", e);
        })

    }, []);

    

    eventDonation.forEach(val => {
    
        if (val[0] === eventDetail.eventId){
            console.log(eventDetail.eventId);
            setEventName(eventDetail.eventName);
        }
    })

    

    console.log(eventName);

   
   

    
    return (
        <div>
                 <div className="card mb-4" style={{ fontSize:'20px' }}>
            <div className="card-header">Event Activity</div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {eventDonation.map((val, key) => {
                      
                      
                    return (
                        <>
                        
                        <p key={key}>{eventName}</p>
                        </>
                    );
                  })
                  
                  }
                </div>
              </div>
             
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{userDetail.emailId}</div>
              </div>
             
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userDetail.phoneNum}
                </div>
              </div>
            
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userDetail.streetAddress}
                </div>
              </div>
              

           
            </div>
          </div>



        </div>


    );


}

export default Activity;
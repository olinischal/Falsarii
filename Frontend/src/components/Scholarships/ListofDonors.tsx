import { useContext, useEffect } from "react";
import Authenticate from "../../Context/Authenticate";
import { getScholarshipDonateList } from "../../services/api";


const ListOfDonors = ({user}) => {
  
    //this will update all the donor list in the scholarship page
    // useEffect(()=> {
    //     getScholarshipDonateList(user.userId).then((res) => {
    //         console.log('The donor list has been successfull', res);
    //     }) .catch((error) => {
    //         console.log("Could not retrieve donor list.", error);
    //       });
    // },[])

    return (

        <div className="card mb-4">
              <div className="card-header">Donators list side bar</div>
              <div className="card-body">
                List of donators and the amount they have given
              </div>
            </div>
    );

}

export default ListOfDonors;
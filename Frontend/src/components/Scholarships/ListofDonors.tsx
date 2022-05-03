import { useContext, useEffect } from "react";
import Authenticate from "../../Context/Authenticate";
import { getScholarshipDonateList } from "../../services/api";


const ListOfDonors = ({user}) => {
 

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
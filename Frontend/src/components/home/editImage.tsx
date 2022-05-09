import { WindowScrollController } from "@fullcalendar/react";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Authenticate from "../../Context/Authenticate";
import ImageList from "./ImageList";

const EditImage = () => {

    const [listView, setListView] = useState<boolean>(false);
    const [selectFile, setSelectFile] = useState<any>(null);

    const {auth}:any = useContext(Authenticate);


    const submitChange = (e) => {
         setListView(true);
   
         console.log("Edit pressed");
    }

    const submitSave = () => {
        setListView(false);
       
        console.log("Saved Pressed");
    }
    let userRole;
  
  
  if(JSON.stringify(auth) === '{}'){
    userRole = null;
  }else{
    userRole = userRole = auth?.res.roles?.find((role) => userRole = role);
  }
 
   


    return (
        <> 
        {userRole === "ROLE_ADMIN"? (
          <>
        <div style={{ position: "relative", top: "10px", left: "10px", justifyContent: 'space-between' }}>
        {listView === false ? (


        
        <Button className="btn btn-warning  " variant="secondary" size="lg" onClick={submitChange}>
          + Edit Image
        </Button>
        ) : (
        <Button className="btn btn-success  mb-1" variant="secondary" size="lg" onClick={submitSave}>
          Save
        </Button> )
}
      </div>
      <ImageList listView = {listView} />
      </>
      ) : (
      <ImageList listView = {listView} />
      
        
      )

}
      </>


    
        );
};


export default EditImage;
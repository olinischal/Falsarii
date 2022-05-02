import { WindowScrollController } from "@fullcalendar/react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ImageList from "./ImageList";

const EditImage = () => {

    const [listView, setListView] = useState<boolean>(false);
    const [selectFile, setSelectFile] = useState<any>(null);


    const submitChange = (e) => {
         setListView(true);
   
         console.log("Edit pressed");
    }

    const submitSave = () => {
        setListView(false);
       // window.location.reload();
        console.log("Saved Pressed");
    }


    return (
        <> 
        <div style={{ position: "relative", top: "10px", left: "10px", justifyContent: 'space-between' }}>
        {listView === false ? (


        
        <Button className="btn btn-warning  " variant="secondary" size="lg" onClick={submitChange}>
          + Edit Scholarships
        </Button>
        ) : (
        <Button className="btn btn-success  mb-1" variant="secondary" size="lg" onClick={submitSave}>
          Save
        </Button> )
}
      </div>
      
      <ImageList listView = {listView} />
      </>


    
        );
};


export default EditImage;
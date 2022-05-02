
import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import {getFiles} from "../../../services/api";
import S3FileUpload from 'react-s3';
// import { uploadFile } from 'react-s3';
import {Aws} from '../../../types/Aws';

window.Buffer = window.Buffer || require("buffer").Buffer;
const ImageUpload = () => {
    const [selectFile, setSelectFile] = useState<any>(null);
    const[getFile, setGetFile] = useState<any>([]);
   
    const fileSelectHandler = e => {
        setSelectFile(e.target.files[0]);
        console.log(e.target.files[0]);
        S3FileUpload.uploadFile(e.target.files[0], config).then(data => {
            console.log(data);
        }).catch(error => {
                console.log("Image cannot be uploaded.", error);
              });
        
    }

    const config = {
        bucketName: 'devtestnafa',
        albumName: 'Pictures',
        region: 'us-central-1',
        accessKeyId: 'AKIAQH7VMXGSXM4FGS42',
        secretAccessKey: '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',
    }

    

    const fileUploadHandler = e => {
     
        

          
        
    
        

    }

    useEffect(() => {
        getFiles().then(res => {
            setGetFile(res);

        }).catch(error => {
          console.log("Image cannot be accessed.", error);
        });

    }, []);

    console.log(getFile);
    // getFile?.map(val => {
    //     console.log(val);
    // })
    
  
    return (
        <div> 
            <Input type="file" onChange={fileSelectHandler} />
            <button onClick={fileUploadHandler}>Upload Picture</button>
            <img src={getFile} />
        </div>
    );
  
    }
export default ImageUpload;
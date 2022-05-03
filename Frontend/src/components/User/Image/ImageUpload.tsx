
import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import {getFiles, uploadFile, uploadImage} from "../../../services/api";
import S3FileUpload from 'react-s3';
// import { uploadFile } from 'react-s3';
import {Aws} from '../../../types/Aws';

window.Buffer = window.Buffer || require("buffer").Buffer;
const ImageUpload = () => {
    const [selectFile, setSelectFile] = useState<any>(null);
    const[getFile, setGetFile] = useState<any>([]);
   
    const fileSelectHandler = e => {

        const reader = new FileReader();
        const fileByteArray:any = [];

        const formData = new FormData();
        let file = e.target.files[0];
        formData.append('i1', e.target.files[0]);
        
        // uploadFile(formData);
        // console.log("this is formdata", formData.keys.toString);
        // setSelectFile(e.target.files[0]);
        
        // S3FileUpload.uploadFile(e.target.files[0], config).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //         console.log("Image cannot be uploaded.", error);
        //       });

        // reader.readAsArrayBuffer(e.target.files[0]);
        // reader.onloadend = (evt) => {
        //   if (evt.target?.readyState === FileReader.DONE) {
        //     const arrayBuffer: any = evt.target.result,
        //       array = new Uint8Array(arrayBuffer);
        //       array.forEach(a => {
        //           fileByteArray.push(a);
        //       })
            // foreach(const a of array) {
            //   fileByteArray.push(a);
            // }

            console.log(e.target.files[0]);

            uploadFile(formData);
          
        


        
    }

    const handleReaderLoaded =(e ) => {

    }

    

    const config = {
        bucketName: 'devtestnafa',
        headers: {'Access-Control-Allow-Origin': '*'},
        region: 'us-east-2',
        accessKeyId: 'AKIAQH7VMXGSXM4FGS42',
        secretAccessKey: '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',
    }

    

    const fileUploadHandler = e => {
        
        const formData = new FormData();
        formData.append('imageFile', selectFile);

        uploadFile( formData);
       // console.log(formData);     

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
            <form action="..." method="post" encType="multipart/form-data">
            <input type="file" name="file" />
</form>
            <button onClick={fileUploadHandler}>Upload Picture</button>
            <img src={getFile} />
        </div>
    );
  
    }
export default ImageUpload;
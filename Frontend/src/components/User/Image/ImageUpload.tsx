import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { getFiles, uploadFile, uploadImage } from "../../../services/api";
import S3FileUpload from "react-s3";
import { Aws } from "../../../types/Aws";

window.Buffer = window.Buffer || require("buffer").Buffer;
const ImageUpload = () => {
  const [selectFile, setSelectFile] = useState<any>(null);
  const [getFile, setGetFile] = useState<any>([]);

  const fileSelectHandler = (e) => {
    const reader = new FileReader();
    const fileByteArray: any = [];

    const formData = new FormData();
    let file = e.target.files[0];
    formData.append("i1", e.target.files[0]);

    console.log(e.target.files[0]);

    uploadFile(formData);
  };

  const handleReaderLoaded = (e) => {};

  const config = {
    bucketName: "devtestnafa",
    headers: { "Access-Control-Allow-Origin": "*" },
    region: "us-east-2",
    accessKeyId: "AKIAQH7VMXGSXM4FGS42",
    secretAccessKey: "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",
  };

  const fileUploadHandler = (e) => {
    const formData = new FormData();
    formData.append("imageFile", selectFile);

    uploadFile(formData);
  };

  useEffect(() => {
    getFiles()
      .then((res) => {
        setGetFile(res);
      })
      .catch((error) => {
        console.log("Image cannot be accessed.", error);
      });
  }, []);

  console.log(getFile);

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
};
export default ImageUpload;

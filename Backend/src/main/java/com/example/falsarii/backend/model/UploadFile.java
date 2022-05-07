package com.example.falsarii.backend.model;

import org.springframework.web.multipart.MultipartFile;

public class UploadFile {

    private String fileName;
    private MultipartFile file;

    public UploadFile(){
        this.fileName = null;
        this.file = null;
    }

    public UploadFile(String fileName, MultipartFile file){
        this.fileName = fileName;
        this.file = file;
    }

    public String getFileName() {
        return fileName;
    }

    public MultipartFile getFile() {
        return file;
    }

}

package com.example.falsarii.backend.model;

public class Upload {

    private String imageName;
    private String fileCode;

    public Upload(){
        this.imageName = null;
        this.fileCode = null;
    }

    public Upload(String imageName, String fileCode) {
        this.imageName = imageName;
        this.fileCode = fileCode;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getFileCode() {
        return fileCode;
    }

    public void setFileCode(String fileCode) {
        this.fileCode = fileCode;
    }
}

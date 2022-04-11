package com.example.falsarii.backend.captcha;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReCaptchaResponse {
	
	private boolean success;
	private String hostname;
    private String challange_ts;
    
    @JsonProperty("error-codes")
	private String[] errorCode;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public String getChallange_ts() {
		return challange_ts;
	}

	public void setChallange_ts(String challange_ts) {
		this.challange_ts = challange_ts;
	}

	public String[] getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String[] errorCode) {
		this.errorCode = errorCode;
	}
    

}

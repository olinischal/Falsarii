
import axios, {AxiosResponse} from 'axios';
import MemberData from '../types/Member';
import EventData from '../types/Event';
import ScholarshipData from '../types/Scholarship';
import GroupData from '../types/Group';


const instance = axios.create({
	baseURL: 'http://localhost:8080/',
	timeout: 150000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};


export const Member = {
	getMembers: (): Promise<MemberData[]> => requests.get('member/getAll'),
	getAMember: (id: number): Promise<MemberData> => requests.get(`member/getMember/${id}`),
	createMember: (post: MemberData): Promise<MemberData> =>
		requests.post('member/add', post),
	updateMember: (id:number, put: MemberData): Promise<MemberData> =>
		requests.put(`member/update/${id}`, put),
	deleteMember: (id: number): Promise<void> => requests.delete(`member/delete/${id}`),
	searchMember:(keyword:string): Promise<MemberData[]> => requests.get(`member/searchMember/${keyword}`),
};

export const EventRequests = {
	getEvents: (): Promise<EventData[]> => requests.get('member/event/view'),
	getAEvent: (id: number): Promise<EventData> => requests.get(`getMember/${id}`),
	createEvent: (post: EventData): Promise<EventData> =>
		requests.post('member/event/create', post),
	updateEvent: (id:number, put: EventData): Promise<EventData> =>
		requests.put(`update/${id}`, put),
	deleteMember: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

export const ScholarshipRequests = {
	getScholarships: (): Promise<ScholarshipData[]> => requests.get('member/scholarship/view'),
	createScholarships: (post: ScholarshipData): Promise<ScholarshipData> =>
		requests.post('member/scholarship/create', post),
	updateScholarships: (id:number, put: ScholarshipData): Promise<ScholarshipData> =>
		requests.put(`update/${id}`, put),
	deleteScholarships: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

export const GroupRequests = {
	getGroups: (): Promise<GroupData[]> => requests.get('member/groups/show-all'),
	createGroup: (post: GroupData): Promise<GroupData> =>
		requests.post('member/groups/create', post),
};

export const JoinGroup = (userId, groupId) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
	  API_URL + "user/join-group", null ,
	{
	  params: {
		userId: Number(userId),
		groupId: Number(groupId)
	  }
	});
  
  }

  export const GetUserGroup = (userId) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.get(
	  API_URL + "user/get-groups",
	{
	  params: {
		userId: Number(userId),
	
	  }
	});
  
  }

  export const sendEmail = (subject:String, text:string, emailList:string[]) =>{
	return axios.post("http://localhost:8080/sendEmail", {    
	  subject,
	  text,
	  emailList
	}).then((response)=> {
	  if(!(String(response.data.message)=== 'email successfully sent')){
		localStorage.setItem("emailError",(response.data));
	  }
	  return response;
	})
	
	;
  };

  export const donateScholarship = (userId: String, scholarshipId: String, date: any, amount: any, anonymity: boolean) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
	  API_URL + "scholarship/donate", null, 
	{
	  params: {
		userId: userId,
		scholarshipId: scholarshipId,
		date: date,
		amount: amount,
		anonymity: anonymity,

	
	  }
	});
  
  }

  export const getScholarshipDonateList = (scholarshipId ) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.get(
	  API_URL + "scholarship/get-all-donations",
	{
	  params: {
		
		scholarshipId: scholarshipId,	
	  }
	});
  
  }

  

  export const editScholarships = (scholarshipId: number, scholarship) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
		API_URL + "scholarship/edit", scholarship, 
	  {
		params: {
		 
		  scholarshipId: scholarshipId
		  
  
	  
		}
	  });


  }

  export const eventEdit = (eventId: number, event) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
		API_URL + "event/edit", event, 
	  {
		params: {
		 
		  eventId: eventId
		  
  
	  
		}
	  });


  }


  export const uploadFile = ( file) => {
	const API_URL = "http://localhost:8080/member/";
	
  
	return axios.post(
		API_URL + "file/upload", file, {
			headers: {
		
				"Content-Type": "multipart/form-data",
					
			  }
	});
  };
  
  export const getFiles = () => {
	const API_URL = "http://localhost:8080/member/";
	return axios.get(API_URL + "list/files");
  };
  
  export const addUserDetail = (userId , userDetail) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
		API_URL + "user/details", userDetail, {
			params: {
		
				userId: userId,
			    
					
			  }
	});

  };

  export const uploadImage = (file) => {
	const API_URL = "http://localhost:8080/member/";

	fetch(API_URL + "file/upload" , {
            method: 'post',
            body: file,
        }).then(res => {
            if(res.ok) {
                console.log(res);
                alert("File uploaded successfully.")
            }else{
				console.log("File was not uploaded successfully");
			}
        });

  }


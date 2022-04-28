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

// update the event api link
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
	getScholarships: (): Promise<ScholarshipData[]> => requests.get('member/viewScholarships'),
	createScholarships: (post: ScholarshipData): Promise<ScholarshipData> =>
		requests.post('member/scholarship/create', post),
	updateScholarships: (id:number, put: ScholarshipData): Promise<ScholarshipData> =>
		requests.put(`update/${id}`, put),
	deleteScholarships: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

export const GroupRequests = {
	getGroups: (): Promise<GroupData[]> => requests.get('member/getAllGroups'),
	createGroup: (post: GroupData): Promise<GroupData> =>
		requests.post('member/createGroup', post),
	
	// updateScholarships: (id:number, put: GroupData): Promise<GroupData> =>
	// 	requests.put(`update/${id}`, put),
	// deleteScholarships: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

export const JoinGroup = (email: string, grpName: string) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
	  API_URL + "user/joinGroup", null ,
	{
	  params: {
		emailId: email,
		groupName: grpName
	  }
	});
  
  }

  export const GetUserGroup = (email: string) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.get(
	  API_URL + "user/getGroups",
	{
	  params: {
		emailId: email,
	
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

  export const donateScholarship = (emailId: String, scholarshipName: String, date: any, amount: any, anonymity: boolean) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
	  API_URL + "donateToScholarship", null, 
	{
	  params: {
		emailId: emailId,
		scholarshipName: scholarshipName,
		date: date,
		amount: amount,
		anonymity: anonymity,

	
	  }
	});
  
  }

  export const activateScholarship = (scholarshipName: String, status: boolean) => {
	const API_URL = "http://localhost:8080/member/";

	return axios.post(
		API_URL + "scholarship/changeStatus", null, 
	  {
		params: {
		 
		  scholarshipName: scholarshipName,
		  status: status
  
	  
		}
	  });


  }
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
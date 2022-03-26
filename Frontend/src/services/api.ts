import axios, {AxiosResponse} from 'axios';
import MemberData from '../types/Member';
import EventData from '../types/Event';


const instance = axios.create({
	baseURL: 'http://localhost:8080/member/',
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
	getMembers: (): Promise<MemberData[]> => requests.get('getAll'),
	getAMember: (id: number): Promise<MemberData> => requests.get(`getMember/${id}`),
	createMember: (post: MemberData): Promise<MemberData> =>
		requests.post('add', post),
	updateMember: (id:number, put: MemberData): Promise<MemberData> =>
		requests.put(`update/${id}`, put),
	deleteMember: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

// update the event api link
export const Event = {
	getMembers: (): Promise<EventData[]> => requests.get('getAll'),
	getAMember: (id: number): Promise<EventData> => requests.get(`getMember/${id}`),
	createMember: (post: EventData): Promise<EventData> =>
		requests.post('add', post),
	updateMember: (id:number, put: EventData): Promise<EventData> =>
		requests.put(`update/${id}`, put),
	deleteMember: (id: number): Promise<void> => requests.delete(`delete/${id}`),
};

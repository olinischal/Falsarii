import axios, {AxiosResponse} from 'axios';
import MemberData from '../types/Member';


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


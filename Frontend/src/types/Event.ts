export default interface EventData {
    id? : any |null,
    title: string,
    address: string,
    date: string,
    description: string,
    deadline: string,
    anonymity: boolean,
    amount: number
}
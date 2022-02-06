import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import { resourceLimits } from 'worker_threads';


interface Student {
  // firstName: string,
  // lastName: string,
  // phoneNumber: string,
  // email: string,
  // password: string,
  client: string

}



const App = () =>{

  const [client, setClient] = useState<Student[]>([]);
  const instance = axios.create({
    baseURL: 'http://localhost:8080/member/getAll',
    timeout: 1500000,
   });

  const responseBody = (response: AxiosResponse) => response.data;

  //console.log(instance.get('http://localhost:8080/member/getAll').then(responseBody));

  useEffect(() => {
		instance.get('http://localhost:8080/member/getAll').then(responseBody)
			.then((data) => {
				setClient(data);
        console.log(data);
        console.log(client[0]);
			})
			.catch((err) => {
				console.log("Error ");
			});
		return () => {};
	}, []);














  // const [firstName, setFirstName] = React.useState('aa');
  // const [lastName, setLastName] = React.useState('aa');
  // const [phoneNumber, setPhoneNumber] = React.useState('aa');
  // const [email, setEmail] = React.useState('aa');
  // const [password, setPassword] = React.useState('aa');


 // const [clients, setClients] = useState([]);

  // const fetchApi = async () => {
  //   const response = await fetch("http://localhost:8080/member/getAll");

  //   const result = await response.json();
  //    console.log(result);  
     
    
  //   // setLastName(result[0].lastName);
  //   // setEmail(result[0].email);
  //   // setPassword(result[0].password);
  //   // setPhoneNumber(result[0].phoneNumber);
  // };
    
    // useEffect(() => {
    //   fetchApi();




    // }, []);


    return (
      <>
        <div>Client List </div>
        {/* <div>{client[0]}</div> */}
        {/* <div>{lastName}</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{password}</div> */}
      </>
    );
    

}

export default App;

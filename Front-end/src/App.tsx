import React, {useEffect} from 'react';

type ApiResponseType = {
  0: Student;
}

type Student = {
  name: string,
  location: string,
  department: string,
}

const App = () =>{
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const fetchApi = React.useCallback(async () => {
    const response = await fetch("http://localhost:8080/api/students");
    const result: ApiResponseType = await response.json();
    setName(result[0].name);
    setLocation(result[0].location);
    setDepartment(result[0].department);
  }, []);
    
    useEffect(() => {
      fetchApi()
    }, [fetchApi]);


    return (
      <>
        <div>Test</div>
        <div>{name}</div>
        <div>{location}</div>
        <div>{department}</div>
      </>
    );
    

}

export default App;

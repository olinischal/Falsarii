import  NotFound  from "./components/NotFound";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import AddEmployee from "./components/AddEmployee";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path ="/" element={<EmployeesList/>}/>
          <Route path="/add" element={<AddEmployee/>}/>
          <Route path="/employees/edit/:id" element={<AddEmployee/>}/>
          <Route path="*" element={<NotFound/>}/>
          

        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
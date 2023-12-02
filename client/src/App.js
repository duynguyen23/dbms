import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Students from "./pages/student.jsx"
import Navbar from "./comp/navbar.jsx"
import Lecturers from "./pages/lecturer.jsx";
import Departments from "./pages/department.jsx";
import Login from "./pages/login.jsx";
import Add from "./comp/addStudent.jsx"
import UpdateStudent from "./pages/updateStudent.jsx"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
      </div>
  },
  {
    path: "/login",
    element:
      <Login/>
  },
  {
    path: "/allstudents",
    element:
    <div>
      <Navbar/>
      <Students/>
    </div>
  }, 
  {
    path: "/alllecturers",
    element:  
    <div>
      <Navbar/>
      <Lecturers/>
    </div>
  },
  {
    path: "/alldepartments",
    element:  
    <div>
      <Navbar/>
      <Departments/>
    </div>  
  },
  {
    path:"/addStudent",
    element: <Add/>
  },
  {
    path:"/updateStudent/:id",
    element: <UpdateStudent/>
  }
]);

function App() {
  return (
    <div className="App"> 
        <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

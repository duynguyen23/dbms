import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Students from "./pages/student.jsx"
import Navbar from "./comp/navbar.jsx"
import Lecturers from "./pages/lecturer.jsx";
import Departments from "./pages/department.jsx";
import Login from "./pages/login.jsx";
import Add from "./comp/addStudent.jsx"
import UpdateStudent from "./pages/updateStudent.jsx"
import Course from "./pages/course.jsx"
import Register from "./pages/register.jsx"
import StudentRegister from "./pages/studentRegister.jsx";
import RegisterInfo from "./pages/registerInfo.jsx";
import Class from "./pages/class.jsx";
import Time from "./pages/time.jsx";
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
  },
  {
    path:"/courses",
    element: 
      <div>
        <Navbar/>
        <Course/>
      </div>
  },
  {
    path:"/register",
    element: 
      <div>
        <Navbar/>
        <Register/>
      </div>
  },
  {
    path:"/register/:id",
    element: 
      <div>
        <Navbar/>
        <StudentRegister/>
      </div>
  },
  {
    path:"/register/info",
    element: 
      <div>
        <Navbar/>
        <RegisterInfo/>
      </div>
  },
  {
    path:"/class/:id",
    element: 
      <div>
        <Navbar/>
        <Class/>
      </div>
  },
  {
    path:"/class/:semester_id/:class_id/:group_id",
    element: 
      <div>
        <Navbar/>
        <Time/>
      </div>
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

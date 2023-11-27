import {BrowserRouter, Routes, Route} from "react-router-dom"
import Students from "./comp/student.jsx"
import './App.css';
import Lecturers from "./comp/lecturer.jsx";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/allstudents" element = {<Students/>}/>
            <Route path="/alllecturers" element = {<Lecturers/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

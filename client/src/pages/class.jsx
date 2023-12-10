import { useState, useEffect } from "react";
import ClassTable from "../comp/classTable"
import axios from "axios";
import { useLocation } from "react-router-dom";
const Class = () => {
    const semester_id = useLocation().pathname.split("/")[2];
    const [courses, setCourses] = useState([])
    useEffect(() =>{
        const fetchAllCourses = async () => {
            try {
                const res = await axios.get("http://localhost:8800/course")
                setCourses(res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchAllCourses()
    },[])


    return (
        <div>
            <div className="title">
                <h1>Thông tin các nhóm lớp theo môn học học kì: {semester_id}</h1>
            </div>
            {
                courses.map((course, i) => (
                    <div className="flexContainer">         
                    <div className="boxInfo">
                        <h2>Thông tin môn học</h2>
                        <p>Mã môn học: {course.course_id}</p>
                        <p>Tên môn học: {course.course_name}</p>
                    </div>
                    <div className="boxInfo">
                        <h2>Danh sách Lớp</h2>
                        <ClassTable sem_id={semester_id} c_id={course.course_id} />
                    </div>
                </div>
                ))    
            }
            {/* {modal && <Add onConfirm = {handleConfirmModal} onClose = {handleCloseModal} course = {classOpen} semester_id={semester_id}/>} */}
        </div>
    )
}
export default Class;
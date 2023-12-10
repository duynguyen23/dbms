import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StudentRegisterTable from '../comp/studentRegisterTable'
import Add from '../comp/addClass'

const RegisterInfo = () => {
    const semester_id = 232;
    const [courses, setCourses] = useState([])
    const [modal, setModal] = useState(false)
    const [classOpen, setClassOpen] = useState()
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


    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }

    return (
        <div>
            <div className="title">
                <h1>Thống kê đăng kí theo môn học học kì {semester_id}</h1>
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
                        <h2>Danh sách sinh viên đăng kí môn học</h2>
                         <button className="btn btn-primary mb-3" onClick={() => {setModal(true); setClassOpen(course)}}>Mở lớp</button>
                        <StudentRegisterTable semester_id={semester_id} course_id={course.course_id} />
                    </div>
                </div>
                ))    
            }
            {modal && <Add onConfirm = {handleConfirmModal} onClose = {handleCloseModal} course = {classOpen} semester_id={semester_id}/>}
        </div>
    )
}

export default RegisterInfo
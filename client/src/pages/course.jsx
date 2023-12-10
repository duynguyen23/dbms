import React, { useEffect, useState } from "react"
import Add from '../comp/addCourse.jsx'
import axios from 'axios'
import './style.css'

const Course = () => {
    const [courses, setCourses] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() =>{
        const fetchAllCourses = async () => {
            try {
                const res = await axios.get("http://localhost:8800/course")
                setCourses (res.data);
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

      
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8800/course/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="title">
                <h1 className="item">Thông tin Khoá học</h1>
                <div className="item">
                    <button className="btn btn-primary"  onClick={() => setModal(true)}>Add new course</button>
                </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                    <th className="col  text-center">Mã môn học</th>
                    <th className="col">Tên môn học</th>
                    <th className="col  text-center">Số tín chỉ</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                    <tr key = {course.course_id}>
                        <th className = "text-center">
                            {course.course_id}
                        </th>
                        <td>
                            {course.course_name}
                        </td>
                        <td className = "text-center">
                            {course.credits}
                        </td>
                        <td className=" text-center">
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(course.course_id)}>X</button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            {modal && <Add onConfirm ={handleConfirmModal} onClose={handleCloseModal}/>}
        </div>
    )
}

export default Course 
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Add from "../comp/addRegister"
import axios from "axios";
import "./style.css"

const StudentRegister  = () =>{
    const location = useLocation()
    const s_id = location.pathname.split("/")[2]
    const semester_id = 232
    const [student, setStudent] = useState({})
    const [courseRegister, setCourseRegister] = useState([])
    const [courses, setCourses] = useState ([])
    const [modal, setModal] = useState(false)
    useEffect (() =>{
        const fetchStudent = async () =>{
            try {
                const res = await axios.get(`http://localhost:8800/student/${s_id}`)
                setStudent(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchStudent();    
    },[])

    useEffect(() => {
        const fetchAllCourses = async () => {
            try {
                const res = await axios.get("http://localhost:8800/course")
                setCourses (res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchAllCourses()
    }, [])

    useEffect(() => {
        const fetchRegister = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/register/${semester_id}/${s_id}`)
                setCourseRegister(res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchRegister()
    },[])


    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }
    
    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://localhost:8800/register/${semester_id}/${s_id}/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div>
            <div className="title">
                <h1 className="item">Đăng kí môn học HK232</h1>
                <div className="item">
                    <button className="btn btn-primary"  onClick={() => setModal(true)}>Thêm đăng kí</button>
                </div>
            </div>
            <div className="flexContainer">         
                <div className="boxInfo">
                    <h2>Thông tin sinh viên</h2>
                    <p>MSSV: {student.student_id}</p>
                    <p>Họ và tên: {student.student_name}</p>
                </div>
                <div className="boxInfo">
                    <h2>Môn học đã đăng kí trong học kì 232</h2>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="col">Mã môn học</th>
                            <th className="col">Tên môn học</th>
                            <th className="col text-center">Số tín chỉ</th>
                            <th className="col text-center">Xoá đăng kí</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseRegister.map(course => (
                            <tr key = {course.course_id}>
                                <th className>
                                    {course.course_id}
                                </th>
                                <td>
                                    {course.course_name}
                                </td>
                                <td className="text-center">
                                    {course.credits}
                                </td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-danger" onClick={() => handleDelete(course.course_id)}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    Tổng số tín chỉ đăng kí : {courseRegister.reduce( function(cnt,o){ return cnt + o.credits; }, 0)}
                    </table>
                </div>
            </div>
            {modal && <Add onConfirm={handleConfirmModal} onClose={handleCloseModal} courses = {courses} student_id = {s_id} semester_id = {semester_id}/>}
        </div>
    )
}

export default StudentRegister;
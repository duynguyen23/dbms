import React, { useEffect, useState } from "react";
import Add from '../comp/addStudent'
import Update from '../comp/updateStudent'
import axios from 'axios'
import './style.css'

const Students = () => {
    const [students, setStudents] = useState([])
    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [updateStudent, setUpdateStudent] = useState(null)

    useEffect(() =>{
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get("http://localhost:8800/student")
                setStudents(res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchAllStudents()
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8800/student/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }

      const handleUpdateConfirm = () => {
        setUpdateModal(false);
      };
  
      const handleUpdateClose = () => {
        setUpdateModal(false);
      }
      

    return (
        <div>
            <div className="title">
                <h1 className="item">Thông tin sinh viên</h1>
                <div className="item">
                    <button className="btn btn-primary"  onClick={() => setModal(true)}>Add new student</button>
                </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                    <th className="col">Mã số sinh viên</th>
                    <th className="col">Họ và tên</th>
                    <th className="col">Lớp</th>
                    <th className="col">Địa chỉ</th>
                    <th className="col">Địa chỉ mail</th>
                    <th className="col">Số điện thoại</th>
                    <th className="col">Khoa</th>
                    <th className="col">Cố vấn</th>
                    <th className="col">Loại</th>
                    <th className="col">Số tín chỉ để tốt nghiệp</th>
                    <th className="col">Bằng tiếng anh</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                    <tr key = {student.student_id}>
                        <th className>
                            {student.student_id}
                        </th>
                        <td>
                            {student.student_name}
                        </td>
                        <td>
                            {student.student_class}
                        </td>
                        <td>
                            {student.address}
                        </td>
                        <td>
                            {student.mail_address}
                        </td>
                        <td>
                            {student.phone_number}
                        </td>
                        <td>
                            {student.department_name}
                        </td>
                        <td>
                            {student.lecturer_name}
                        </td>
                        <td>
                            {student.student_type}
                        </td>
                        <td>
                            {student.no_credits}
                        </td>
                        <td>
                            {student.certificate}
                        </td>
                        <td>
                            <button type="button" class="btn btn-info "onClick={() => {setUpdateModal(true); setUpdateStudent(student)}}>M</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(student.student_id)}>X</button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            {modal && <Add onConfirm ={handleConfirmModal} onClose={handleCloseModal}/>}
            {updateModal && <Update onConfirm ={handleUpdateConfirm} onClose={handleUpdateClose} studentProp = {updateStudent}/>}
        </div>
    )
}

export default Students
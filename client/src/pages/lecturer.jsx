import React, { useEffect, useState } from "react";
import axios from 'axios'
import Add from '../comp/addLecturer'
import Update from '../comp/updateLecturer'

const Lecturers = () => {
    const [lecturers, setLecturers] = useState([])
    const [modal, setModal] = useState(false)

    const [updateModal, setUpdateModal] = useState(false)
    const [updateLecturer, setUpdateLecturer] = useState(null)

    const handleUpdateConfirm = () => {
        setUpdateModal(false);
      };
  
      const handleUpdateClose = () => {
        setUpdateModal(false);
      }

    useEffect(() =>{
        const fetchAllLecturers = async () => {
            try {
                const res = await axios.get("http://localhost:8800/lecturer")
                setLecturers(res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchAllLecturers()
    },[])

    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8800/lecturer/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="title">
                <h1 className="item">Thông tin giảng viên</h1>
                <div className="item">
                    <button className="btn btn-primary"  onClick={() => setModal(true)}>Add new lecturer</button>
                </div>
            </div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                    <th className="col">Mã giảng viên</th>
                    <th className="col">Họ và tên</th>
                    <th className="col">Ngày sinh</th>
                    <th className="col">Địa chỉ</th>
                    <th className="col">Địa chỉ mail</th>
                    <th className="col">Số điện thoại</th>
                    <th className="col">Chuyên ngành</th>
                    <th className="col">Khoa</th>
                </tr>
              </thead>
              <tbody>
                {lecturers.map(lecturer => (
                    <tr key = {lecturer.lecturer_id}>
                        <th>
                            {lecturer.lecturer_id}
                        </th>
                        <td>
                            {lecturer.lecturer_name}
                        </td>
                        <td>
                            {lecturer.dob}
                        </td>
                        <td>
                            {lecturer.address}
                        </td>
                        <td>
                            {lecturer.mail_address}
                        </td>
                        <td>
                            {lecturer.phone_number}
                        </td>
                        <td>
                            {lecturer.speciality}
                        </td>
                        <td>
                            {lecturer.department_name}
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" onClick={() => {setUpdateModal(true); setUpdateLecturer(lecturer)}}>M</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(lecturer.lecturer_id)}>X</button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            {modal && <Add onConfirm ={handleConfirmModal} onClose={handleCloseModal}/>}
            {updateModal && <Update onConfirm ={handleUpdateConfirm} onClose={handleUpdateClose} lecturerProp = {updateLecturer}/>}
        </div>
    )
}

export default Lecturers
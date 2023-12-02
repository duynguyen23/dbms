import React, { useEffect, useState } from "react"
import Add from '../comp/addDepartment.jsx'
import axios from 'axios'
import './style.css'

const Departments = () => {
    const [deparments, setDepartments] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() =>{
        const fetchAllDepartments = async () => {
            try {
                const res = await axios.get("http://localhost:8800/department")
                setDepartments (res.data);
            } catch (err){
                console.log(err)
            }
        }
        fetchAllDepartments()
    },[])

    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8800/department/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="title">
                <h1 className="item">Thông tin khoa</h1>
                <div className="item">
                    <button className="btn btn-primary"  onClick={() => setModal(true)}>Add new department</button>
                </div>
            </div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                    <th className="col">Mã Khoa</th>
                    <th className="col">Tên Khoa</th>
                    <th className="col">Toà</th>
                    <th className="col">Số điện thoại</th>
                    <th className="col">Địa chỉ mail</th>
                    <th className="col">Trưởng Khoa</th>
                </tr>
              </thead>
              <tbody>
                {deparments.map(department => (
                    <tr key = {department.department_id}>
                        <th className>
                            {department.department_id}
                        </th>
                        <td>
                            {department.department_name}
                        </td>
                        <td>
                            {department.building}
                        </td>
                        <td>
                            {department.phone_number}
                        </td>
                        <td>
                            {department.mail_address}
                        </td>
                        <td>
                            {department.lecturer_name}
                        </td>
                        <td>
                            <button type="button" class="btn btn-info">M</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(department.department_id)}>X</button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            {modal && <Add onConfirm ={handleConfirmModal} onClose={handleCloseModal}/>}
        </div>
    )
}

export default Departments 
import React, { useEffect, useState } from "react";
import axios from 'axios'

const Lecturers = () => {
    const [lecturers, setLecturers] = useState([])
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
    return (
        <div>
            <h1>Thông tin giảng viên</h1>
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
                    <tr>
                        <th className>
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
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default Lecturers
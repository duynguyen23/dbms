import React, { useEffect, useState } from "react";
import axios from 'axios'

const Students = () => {
    const [students, setStudents] = useState([])
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
    return (
        <div>
            <h1>Thông tin sinh viên</h1>
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
                    <tr>
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
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default Students
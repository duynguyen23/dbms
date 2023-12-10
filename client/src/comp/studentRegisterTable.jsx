import axios from "axios"
import { useState, useEffect } from "react"

const StudentRegisterTable = ({semester_id, course_id}) =>{
const [students, setStudents] = useState([])
    useEffect( () => {
        const fetchStudent = async () => {
                try {
                    const res = await axios.get(`http://localhost:8800/registerbycourse/${semester_id}/${course_id}`)
                    setStudents(res.data);
                } catch (err){
                    console.log(err)
                }
        }
        fetchStudent()
    },)
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="col">MSSV</th>
                    <th className="col">Họ và tên</th>
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
                    </tr> ))
                }        
            </tbody>
            Tổng số học sinh đăng kí : {students.length}
        </table>
    )
}

export default StudentRegisterTable
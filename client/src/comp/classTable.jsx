import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ClassTable = ({sem_id, c_id}) =>{
const [classes, setClasses] = useState([])
    useEffect( () => {
        const fetchClass = async () => {
                try {
                    const res = await axios.get(`http://localhost:8800/class/${sem_id}/${c_id}`)
                    setClasses(res.data);
                } catch (err){
                    console.log(err)
                }
        }
        fetchClass()
    },[])
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8800/class/${sem_id}/${c_id}/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="col">Mã môn học</th>
                    <th className="col">Toà</th>
                    <th className="col">Phòng</th>
                    <th className="col">Mã giảng viên</th>
                    <th className="col">Tên giảng viên</th>
                    <th className="col text-center">Hành động</th>
                </tr>
            </thead>
            <tbody>
                {classes.map(clas => (
                    <tr>
                        <th className>
                            {clas.group_id}
                        </th>
                        <td>
                            {clas.class_building}
                        </td>
                        <td>
                            {clas.room_number}
                        </td>
                        <td>
                            {clas.lecturer_id}
                        </td>
                        <td>
                            {clas.lecturer_name}
                        </td>
                        <td className=" text-center">
                            <Link to={`/class/${sem_id}/${c_id}/${clas.group_id}`}><button type="button" class="btn btn-primary me-3">Xem lịch học</button></Link>
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(clas.group_id)}>Xoá lớp</button>
                        </td>
                    </tr> ))
                }        
            </tbody>
            Tổng số lớp : {classes.length}
        </table>
    )
}

export default ClassTable
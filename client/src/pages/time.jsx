import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import TimeTable from "../comp/timeTable"
import Add from "../comp/addTime"

const Time = () => {
    const location = useLocation();
    const semester_id = location.pathname.split("/")[2]
    const course_id = location.pathname.split("/")[3]
    const group_id = location.pathname.split("/")[4]
    const [clas, setClas] = useState({})
    const [modal, setModal] = useState(false)
    useEffect(() => {

        const fetchClass = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/class/${semester_id}/${course_id}/${group_id}`)
                setClas(res.data[0]);
            } catch (err){
                alert(err)
            }
        }
        fetchClass()
    },[])
    console.log(clas)
    
    const handleCloseModal = () => {
        setModal(false);
      };
  
      const handleConfirmModal = () => {
        setModal(false);
      }

    return (
        <div>
            <div className="title">
                <h1>Thông tin lớp học  môn {course_id}</h1>
                <div className="item">
                    <button className="btn btn-primary" onClick={() => setModal(true)}>Thêm lịch học</button>
                </div>
            </div>
            <div className="flexContainer">         
                <div className="boxInfo">
                    <h2>Thông tin lớp</h2>
                    <p>Mã môn học: {course_id}</p>
                    <p>Mã lớp: {group_id}</p>
                    <p>Toà: {clas.class_building}</p>
                    <p>Phòng: {clas.room_number}</p>
                    <p>Giảng viên: {clas.lecturer_name}</p>
                </div>
                <div className="boxInfo">
                    <h2>Lịch học</h2>                
                    <TimeTable semester_id={semester_id} course_id={course_id} group_id={group_id} />
                </div>
            </div>
            {modal && <Add onConfirm={handleConfirmModal} onClose={handleCloseModal} semester_id={semester_id} course_id={course_id} group_id={group_id}/>}
        </div>
    )
}

export default Time
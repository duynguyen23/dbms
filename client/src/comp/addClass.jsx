import React from 'react'
import {useState, useEffect} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose, course, semester_id}) => {

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

    const [classOpen, setClassOpen] = useState({
        course_id: course.course_id,
        semester_id: semester_id,
        group_id: null,
        class_building: null,
        room_number: null,
        lecturer_id: null,
    })

    const handleChange = (e) =>{
        setClassOpen(prev => (e.target.name === "lecturer_id"?{...prev, [e.target.name]: (e.target.value).split(" ")[0]}:{...prev, [e.target.name]: (e.target.value)}))
    }
    console.log(classOpen);

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/class", classOpen);
            onConfirm();
        }catch(err){
            alert(err.response.data.sqlMessage)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Tạo lớp mới</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã môn học</label>
                    <input id="disabledSelect" type="number" name='course_id' className="form-control" placeholder={course.course_id} disabled/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã học kì</label>
                    <input id="disabledSelect" type="number" name='semester_id' className="form-control" placeholder={semester_id} disabled/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã nhóm lớp</label>
                    <input type="text" name='group_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Toà</label>
                    <input type="text" name='class_building' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phòng học</label>
                    <input type="number" name='room_number' className="form-control" onChange={handleChange}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Chọn giảng viên</label>
                    <select name='lecturer_id' onChange={handleChange} className="form-select">
                        <option>Chọn giảng viên: mã giảng viên - tên giảng viên - Chuyên ngành</option>
                        {lecturers.map(lecturer => (
                            <option>{lecturer.lecturer_id} - {lecturer.lecturer_name} - {lecturer.speciality}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
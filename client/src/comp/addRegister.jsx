import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose, courses ,student_id, semester_id}) => {


    const [register, setRegister] = useState({
        student_id: student_id,
        course_id: null,
        semester_id: semester_id,
    })

    const handleChange = (e) =>{
        setRegister(prev => ({...prev, [e.target.name]: (e.target.value).substring(0,6)}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/register", register)
            window.location.reload();
        }catch(err){
            alert(err.response.data.sqlMessage)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Đăng kí mới</h1>
            <div className="form">
                <div class="mb-3">
                    <label class="form-label">Chọn môn học</label>
                    <select id="disabledSelect" name='course_id' onChange={handleChange} className="form-select">
                        <option>Chọn môn học: mã môn - tên môn - số tín chỉ</option>
                        {courses.map(course => (
                            <option>{course.course_id} - {course.course_name} - {course.credits}</option>
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
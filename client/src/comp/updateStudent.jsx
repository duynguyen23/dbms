import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Update = ({onConfirm, onClose, studentProp}) => {


    const [student, setStudents] = useState({
        student_id: studentProp.student_id,
        student_name: studentProp.student_name,
        student_class: studentProp.student_class,
        address: studentProp.address,
        mail_address: studentProp.mail_address,
        phone_number: studentProp.phone_number,
        major_id: null,
        advisor_id: null,
        student_type: studentProp.student_type,
        no_credits: studentProp.no_credits,
        certificate: studentProp.certificate,
    })

    const handleChange = (e) =>{
        setStudents(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8800/student/${studentProp.student_id}`, student);
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Update on student id: {studentProp.student_id}</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã số sinh viên</label>
                    <input type="number" name='student_id' className="form-control" placeholder={studentProp.student_id} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Họ và tên</label>
                    <input type="text" name='student_name' className="form-control" onChange={handleChange} placeholder = {student.student_name}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Lớp</label>
                    <input type="text" name='student_class' className="form-control" onChange={handleChange} placeholder = {student.student_class}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ</label>
                    <input type="text" name='address' className="form-control" onChange={handleChange} placeholder = {student.address}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ email</label>
                    <input type="email" name='mail_address' className="form-control" onChange={handleChange} placeholder = {student.mail_address}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số điện thoại</label>
                    <input type="text" name='phone_number' className="form-control" onChange={handleChange} placeholder = {student.phone_number}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Khoa</label>
                    <input type="number" name='major_id' className="form-control" onChange={handleChange} placeholder = {student.major_id}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã số giảng viên cố vấn</label>
                    <input type="number" name='advisor_id' className="form-control" onChange={handleChange} placeholder = {student.advisor_id}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Loại</label>
                    <select id="disabledSelect" name='student_type'onChange={handleChange} placeholder = {student.student_type} className="form-select">
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số tín chỉ để tốt nghiệp</label>
                    <input type="number" name='no_credits' className="form-control" onChange={handleChange} placeholder = {student.no_credits}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Bằng tiếng anh</label>
                    <input type="text" name='certificate' className="form-control" onChange={handleChange} placeholder = {student.certificate}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Update
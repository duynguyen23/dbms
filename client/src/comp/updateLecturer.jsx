import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Update = ({onConfirm, onClose, lecturerProp}) => {


    const [lecturer, setLecturers] = useState({
        lecturer_id: lecturerProp.lecturer_id,
        lecturer_name: lecturerProp.lecturer_name,
        lecturer_dob: lecturerProp.dob,
        address: lecturerProp.address,
        mail_address: lecturerProp.mail_address,
        phone_number: lecturerProp.phone_number,
        speciality: lecturerProp.speciality,
        department_id: null,
    })

    const handleChange = (e) =>{
        setLecturers(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8800/lecturer/${lecturerProp.lecturer_id}`, lecturer);
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Update Lecturer id: {lecturerProp.lecturer_id}</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã giảng viên</label>
                    <input type="number" name='lecturer_id' className="form-control" onChange={handleChange} placeholder = {lecturerProp.lecturer_id}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Họ và tên</label>
                    <input type="text" name='lecturer_name' className="form-control" onChange={handleChange} placeholder = {lecturerProp.lecturer_name}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Ngày sinh</label>
                    <input type="text" name='dob' className="form-control" onChange={handleChange} placeholder = {lecturerProp.dob}/>
                    <small id="emailHelp" class="form-text text-muted">Nhập dưới dạng yyyy-mm-dd.</small>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ</label>
                    <input type="text" name='address' className="form-control" onChange={handleChange} placeholder = {lecturerProp.address}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ email</label>
                    <input type="email" name='mail_address' className="form-control" onChange={handleChange} placeholder = {lecturerProp.mail_address}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số điện thoại</label>
                    <input type="text" name='phone_number' className="form-control" onChange={handleChange} placeholder = {lecturerProp.phone_number}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Chuyên ngành</label>
                    <input type="text" name='speciality' className="form-control" onChange={handleChange} placeholder = {lecturerProp.speciality}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã số khoa</label>
                    <input type="number" name='department_id' className="form-control" onChange={handleChange} placeholder = {"Điền lại mã số khoa"}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Update
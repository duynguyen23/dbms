import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose}) => {


    const [student, setStudents] = useState({
        student_id: null,
        student_name: null,
        student_class: null,
        address: null,
        mail_address: null,
        phone_number: null,
        major_id: null,
        advisor_id: null,
        student_type: null,
        no_credits: null,
        certificate: null,
    })

    const handleChange = (e) =>{
        setStudents(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/student", student);
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Add a new student</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã số sinh viên</label>
                    <input type="number" name='student_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Họ và tên</label>
                    <input type="text" name='student_name' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Lớp</label>
                    <input type="text" name='student_class' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ</label>
                    <input type="text" name='address' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ email</label>
                    <input type="email" name='mail_address' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số điện thoại</label>
                    <input type="text" name='phone_number' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Khoa</label>
                    <input type="number" name='major_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã số giảng viên cố vấn</label>
                    <input type="number" name='advisor_id' className="form-control" onChange={handleChange}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Loại</label>
                    <select id="disabledSelect" name='student_type'onChange={handleChange} className="form-select">
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số tín chỉ để tốt nghiệp</label>
                    <input type="number" name='no_credits' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Bằng tiếng anh</label>
                    <input type="text" name='certificate' className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
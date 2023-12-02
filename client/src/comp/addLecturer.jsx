import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose}) => {


    const [lecturer, setLecturers] = useState({
        lecturer_id: null,
        lecturer_name: null,
        dob: null,
        address: null,
        mail_address: null,
        phone_number: null,
        speciality: null,
        department_id: null,
    })

    const handleChange = (e) =>{
        setLecturers(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/lecturer", lecturer);
            window.location.reload();
            onConfirm();
            
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Add a new lecturer</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã giảng viên</label>
                    <input type="number" name='lecturer_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Họ và tên</label>
                    <input type="text" name='lecturer_name' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Ngày sinh</label>
                    <input type="text" name='dob' className="form-control" onChange={handleChange}/>
                    <small id="emailHelp" class="form-text text-muted">Nhập dưới dạng yyyy-mm-dd.</small>
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
                    <label  className="form-label">Chuyên ngành</label>
                    <input type="text" name='speciality' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mã số khoa</label>
                    <input type="number" name='department_id' className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
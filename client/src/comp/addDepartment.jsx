import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose}) => {


    const [department, setDepartments] = useState({
        department_id: null,
        department_name: null,
        buiding: null,
        phone_number: null,
        mail_address: null,
        head_lecturer: null,
    })

    const handleChange = (e) =>{
        setDepartments(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/department", department);
            onConfirm();
            window.location.reload(true)
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Add a new department</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã khoa</label>
                    <input type="number" name='department_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Tên khoa</label>
                    <input type="text" name='department_name' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Toà</label>
                    <input type="text" name='buiding' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số điện thoại</label>
                    <input type="text" name='phone_number' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ email</label>
                    <input type="email" name='mail_address' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Trưởng Khoa</label>
                    <input type="number" name='head_lecturer' className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
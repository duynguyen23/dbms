import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'



const Update = ({onConfirm, onClose, departmentProp}) => {


    const [department, setDepartments] = useState({
        department_id: departmentProp.department_id,
        department_name: departmentProp.department_name,
        building: departmentProp.building,
        phone_number: departmentProp.phone_number,
        mail_address: departmentProp.mail_address,
        head_lecturer: null,
    })

    const handleChange = (e) =>{
        setDepartments(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8800/department/${departmentProp.department_id}`, department);
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Update on department id: {departmentProp.department_id}</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã khoa</label>
                    <input type="number" name='department_id' className="form-control" onChange={handleChange} placeholder={departmentProp.department_id}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Tên khoa</label>
                    <input type="text" name='department_name' className="form-control" onChange={handleChange} placeholder={departmentProp.department_name}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Toà</label>
                    <input type="text" name='building' className="form-control" onChange={handleChange} placeholder={departmentProp.building}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số điện thoại</label>
                    <input type="text" name='phone_number' className="form-control" onChange={handleChange} placeholder={departmentProp.phone_number}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Địa chỉ email</label>
                    <input type="email" name='mail_address' className="form-control" onChange={handleChange} placeholder={departmentProp.mail_address}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Trưởng Khoa</label>
                    <input type="number" name='head_lecturer' className="form-control" onChange={handleChange} placeholder={departmentProp.head_lecturer}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Update
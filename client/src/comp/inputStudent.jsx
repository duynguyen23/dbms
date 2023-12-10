import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import { Link } from 'react-router-dom'



const Input = ({onConfirm, onClose}) => {


    const [student, setStudent] = useState(null)

    const handleChange = (e) =>{
        setStudent(e.target.value)
    }
    
    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Input your ID: </h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Nhập mã số sinh viên</label>
                    <input type="number" name='student' className="form-control" onChange={handleChange}/>
                </div>
                <Link to = {"/register/"+ student}><button type="submit" className="btn btn-success">Submit</button></Link>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Input
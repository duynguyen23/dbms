import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose}) => {


    const [course, setCourses] = useState({
        course_id: null,
        course_name: null,
        credits: null,
    })

    const handleChange = (e) =>{
        setCourses(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/course", course);
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
        <h1>Add a new Course</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Mã môn học</label>
                    <input type="text" name='course_id' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Tên khoa</label>
                    <input type="text" name='course_name' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Số tín chỉ</label>
                    <input type="number" name='credits' className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
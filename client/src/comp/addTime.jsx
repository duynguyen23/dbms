import React from 'react'
import {useState} from 'react'
import '../pages/style.css'
import axios from 'axios'


const Add = ({onConfirm, onClose, semester_id,course_id, group_id}) => {


    const [time, setTime] = useState({
        semester_id: semester_id,
        course_id: course_id,
        group_id: group_id,
        time_week: null,
        time_day: null,
        time_start: null,
        time_end: null
    })


    const handleChange = (e) =>{
        setTime(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    console.log(time)

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/time", time);
            window.location.reload();
            
        }catch(err){
            console.log(err)
        }
    }

    return(
      <div> 
        <div className="overlay"></div>
        <div className='Modal open'>
        <h1>Add a new timer</h1>
            <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Tuần học</label>
                    <input type="number" name='time_week' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Thứ: </label>
                    <input type="number" name='time_day' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Thời gian bắt đầu </label>
                    <input type="text" name='time_start' className="form-control" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Thời gian kết thúc </label>
                    <input type="text" name='time_end' className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={onClose}>Cancel</button>
            </div>      
        </div>
      </div> 
    )
}

export default Add
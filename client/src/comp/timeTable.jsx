import { useEffect, useState } from "react"
import axios from "axios"

const TimeTable = ({semester_id, course_id, group_id}) => {
    const [times, setTimes] = useState([])
    useEffect( () => {
        const fetchClass = async () => {
                try {
                    const res = await axios.get(`http://localhost:8800/time/${semester_id}/${course_id}/${group_id}`)
                    setTimes(res.data);
                } catch (err){
                    console.log(err)
                }
        }
        fetchClass()
    },[])
    const handleDelete = async (time_week,time_day, time_start,time_end) => {
        try{
            await axios.delete(`http://localhost:8800/time/${semester_id}/${course_id}/${group_id}/${time_week}/${time_day}/${time_start}/${time_end}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    return (
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th className="col">Tuần</th>
                    <th className="col">Thứ</th>
                    <th className="col">Thời gian bắt đầu</th>
                    <th className="col">Thời gian kết thúc</th>
                </tr>
            </thead>
            <tbody>
                {times.map(clas => (
                    <tr>
                        <td className>
                            {clas.time_week}
                        </td>
                        <td>
                            {clas.time_day}
                        </td>
                        <td>
                            {clas.time_start}
                        </td>
                        <td>
                            {clas.time_end}
                        </td>
                        <td className=" text-center">
                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(clas.time_week,clas.time_day, clas.time_start,clas.time_end)}>Xoá lịch</button>
                        </td>
                    </tr> ))
                }        
            </tbody>
        </table>
    )
}

export default TimeTable
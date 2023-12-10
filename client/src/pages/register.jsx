import { useState } from "react"
import Input from "../comp/inputStudent"
import { Link } from "react-router-dom";


const Register = () => {
    const [modal, setModal] = useState(false);

    const handleConfirm = () => {
        setModal(false);
      };
  
      const handleClose = () => {
        setModal(false);
      }

    return (
        <div>
            <div className="d-grid gap-2 col-2 mx-auto mt-5">
            <button className="btn btn-primary" type="button" onClick={() => setModal(true)}>Đăng kí môn học</button>
            <Link  className="btn btn-primary" to = '/register/info'>Xem thống kê đăng kí</Link>
            </div>
            {modal && <Input onConfirm = {handleConfirm}  onClose = {handleClose}/>}
        </div>
           
    )
}

export default Register
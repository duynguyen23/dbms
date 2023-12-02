import React from "react";

const Login = () => {
    return(
        <div className="wrapper">
            
            <form className = 'card p-3 bg-light' style={{width: "18rem"}}>
            <h3 className="card-title text-center">Đăng nhập</h3>
            <div className="form-outline mb-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" id="form2Example2" className="form-control" />
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center text-danger">
                    Tên đăng nhập hoặc mật khẩu sai!
                </div>
            </div>

        
            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
            </form>
        </div>
    )
}
export default Login
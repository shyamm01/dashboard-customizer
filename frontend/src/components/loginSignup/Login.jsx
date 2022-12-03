import React from 'react'
import { Formik } from 'formik'
import {Swal} from 'sweetalert2'
import { useNavigate } from "react-router-dom";

import './style.css'

const Login = () => {
    
    const inputStyle = {
        outline: 'none',
        border: 'none',
    }
    const otpStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between'

    }
    const navigate = useNavigate();
    const loginSubmit = async (formdata) => {
    console.log(formdata);
    const res=await fetch('http://localhost:5000/user/authenticate',{
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {'Content-Type' : 'application/json'}
    });
    console.log(res.status);

    

    if (res.status===201) {
      const data = await res.json();

      sessionStorage.setItem('user',JSON.stringify(data));

      Swal.fire({
        icon : 'success',
        title : 'success',
        text : 'you have loggedin successfully'
      });
      navigate('/');
      
    }else if (res.status===401){
      Swal.fire({
        icon : 'error',
        title : 'Error',
        text: 'Email or Password is incorrect'
      });
    }else{
      Swal.fire({
        icon:'error',
        title : 'Error',
        text : 'Unknown error is occured'
      });
    }
  }

    return (
        <>
            <div className="container1">
                <div className="forms-container">
                    <div className="signin-signup">
                        <Formik initialValues={{ username: "", password: "" }} onSubmit={loginSubmit}>
                        {({values, handleChange, handleSubmit})=>(
                            <form onSubmit={handleSubmit} className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user" />
                                    <input type="text" placeholder="Username/email" style={inputStyle} name='username' onChange={handleChange} value={values.username} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock" />
                                    <input type="password" placeholder="Password" style={inputStyle} name='password' onChange={handleChange} value={values.password}/>
                                </div>
                                <button  defaultValue="Verify" className="e-9-btn solid" style={inputStyle}>Login</button>
                                <p className="social-text">Or</p>
                                <h4>Login With OTP</h4>

                                <div className="input-field otp" style={otpStyle}>
                                    <i className="fas fa-mobile" />
                                    <input type="number" placeholder=" Enter Your Phone" style={inputStyle} />
                                    <button className='otp-btn'>Get OTP</button>
                                </div>
                                <div className='input-field'>
                                    <i className="fas fa-unlock" />
                                    <input type="text" placeholder=" Enter Your OTP" style={inputStyle} />
                                </div>
                                <button  defaultValue="Verify" className="e-9-btn solid" style={inputStyle}>Verify</button>
                            </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex
                                ratione. Aliquid!
                            </p>
                            <button className="e-9-btn transparent" id="sign-up-btn">
                                Let's started
                            </button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                </div>
            </div>




        </>

    )
}

export default Login
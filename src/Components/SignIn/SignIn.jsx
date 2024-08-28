import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images.jpeg';
const SignIn = () => {
  return (
    <>
     <div className="wrapper alert alert-dark wrapper alert alert-dark mx-auto d-flex justify-content-center align-item-center
       text-center">
      <div className="form-wrapper sign-up">
        <form action="" id="form">
          <img
            src={logo}
            className="logo w-25 mx-auto justify-content-center align-item-center text-center d-flex mt-5"
            alt="Logo"
          />

          <div className="input-box">
            <input type="text" id="email" required />
            <label htmlFor="email" className='fw-bold'>Email</label>
          </div>

          <div className="input-box">
            <input type="password" id="password" required />
            <label htmlFor="password" className='fw-bold'>Password</label>
          </div>

          <div className="register-forget">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>

          <button
            type="submit"
            className='alert alert-success rounded rounded-6 w-100'
          >
            <span className='fw-bold text-decoration-none text-dark fs-6'>Sign In</span>
          </button>

          <div className="SignUp-link">
            <p className='fw-bold'>
              Don't have an account?{' '}
              <Link to="/SignUp" className="SignInBtn-link">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignIn
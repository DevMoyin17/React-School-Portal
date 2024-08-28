import React from "react";
import logo from "../../assets/images.jpeg";

const Admin = () => {
  return (
    <>
      <div className="wrapper alert alert-dark mx-auto d-flex justify-content-center align-item-center
       text-center ">
        <div className="form-wrapper sign-in">
          <form action="" id="form">
            <img
              src={logo}
              className="logo w-25 mx-auto justify-content-center align-item-center text-center d-flex "
              alt="..."
              />
              <h3 className="fw-bold">Sign In</h3>
              <p>Enter your Email</p>
            <div className="input-box">
              <input type="text" id="email" required />
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
            </div>

            <div className="input-box">
              <input type="password" id="password" required />
              <label htmlFor="password" className="fw-bold">
                Password
              </label>
            </div>

            <button
              type="submit"
              className="alert alert-success rounded rounded-6 w-100"
            >
              <span className="fw-bold text-decoration-none text-dark fs-6">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;

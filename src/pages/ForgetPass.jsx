import React from "react";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div>
      <div className="bdy">
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>Forget Password</h3>
                <p>New Password</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="email" />
              <input type="password" placeholder="new password" />
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;

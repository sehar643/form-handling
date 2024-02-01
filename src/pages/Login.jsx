import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bdy">
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                Not registered? <Link to="/signup">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

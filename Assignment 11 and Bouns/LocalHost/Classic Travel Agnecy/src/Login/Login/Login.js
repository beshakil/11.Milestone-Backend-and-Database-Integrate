import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import './Login.css'

const Login = () => {
  const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

  const history = useHistory()
  const location = useLocation()

  const url = location.state?.from || "/home"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  }




  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false)
      })
  }





  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true)
        setUser(res.user)
        history.push(url)
      }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div className="login pt-5 pb-5">
      <div className="text-center">
        <h1 className='pb-4 pt-4'>Please <span className="span">Login</span></h1>
      </div>
      <div className="">
        <form onSubmit={handleLoginWithEmailAndPassword}>
          <input className="form-control" type="email" onBlur={handleGetEmail} placeholder="Email" />
          <br />
          <input className="form-control" type="password" onBlur={handleGetPassword} placeholder="Password" />
          <br />
          <input className="btn btn-primary me-3" type="submit" value="login" />
          <button className="btn btn-primary" onClick={handleGoogleLogin}>Google Sign In</button>
        </form>
        <p className="pt-5"> New User ?<Link to="/register">Please register</Link ></p>
      </div>


    </div>
  );
};

export default Login;

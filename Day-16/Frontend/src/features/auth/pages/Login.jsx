import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import logo from "../../../assets/Instanamelogo.png"
import img1 from "../../../assets/Insta.png"


const Login = () => {
  const {loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await handleLogin(username,password)

   navigate('/')


  };

  if(loading){
    return (
        <main>
            <h1 style={{color:'gray'}}>Loading......</h1>
        </main>
    )
  }

  return (
    <main>
      <div className="side-section">
        <h1>See everyday moments from <br />your <span>close friends</span>.</h1>
        <img src={img1} alt="" />
      </div>
      <div className="form-container">
        <img src={logo} alt=""/>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e)=>{setUsername(e.target.value)}}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e)=>{setPassword(e.target.value)}}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account ? <Link to={"/register"}>Register.</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;

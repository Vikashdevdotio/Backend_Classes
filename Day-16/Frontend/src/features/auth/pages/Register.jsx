import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth';
import logo from "../../../assets/Instanamelogo.png"
import img1 from "../../../assets/Insta.png"

const Register = () => {
  const  {loading,handleRegister} = useAuth()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();

   await handleRegister(username,email,bio,password)
   navigate('/')
  };

  if(loading){
    return(<main><h1 style={{color:'gray'}}>Loading....</h1></main>)
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
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />

          <input 
          onChange={(e)=>{
            setBio(e.target.value)
          }}
          type="text" 
          name="bio" 
          id="bio" 
          placeholder="Enter bio" 
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />

          <button className="button primary-button" type="submit">
            Register
          </button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Login.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register

import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth';

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
    return(<main><h1>Loading....</h1></main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
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
          Already have an account ? <Link to={"/login"}>Login to account.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register

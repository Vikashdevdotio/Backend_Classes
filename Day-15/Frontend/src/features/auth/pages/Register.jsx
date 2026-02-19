import React,{useState} from 'react'
import { Link} from 'react-router'
import { useAuth } from '../hooks/useAuth'


const Register = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [bio, setBio] = useState('')
  
   const {handleRegister, loading} = useAuth()
  
   if(loading){
    return (
      <h1>Loading...</h1>
    )
   }
   async function handleSubmit(e){
    e.preventDefault()

       handleRegister(username,email,bio,password)
       .then(res=>{
        console.log(res)
       })
   }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <input
            onInput={(e) => {
              setBio(e.target.value);
            }}
            type="text"
            name="bio"
            placeholder="Enter bio"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}


export default Register
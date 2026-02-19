import React,{useState} from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login =()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {handleLogin,loading} = useAuth()
    const navigate = useNavigate()
   if(loading){
    return (
      <h1>Loading...</h1>
    )
   }
    async function handleSubmit(e) {
        e.preventDefault()
       handleLogin(email, password)
       .then(res=>{
        console.log(res)
        navigate("/")
       })
    }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="Email"
            placeholder="Enter email"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}


export default Login
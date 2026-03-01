import React from 'react'
import "../style/pagenotfound.scss"
import gif from "../../../assets/404.gif"
import { useNavigate } from 'react-router'
const PageNotFound = () => {
    const navigate = useNavigate()

    function backBtn(){
    navigate("/")
    }

  return (
    <div className='page-not-found'>
      <img src={gif} alt="404" />
      <div className='msg'>
      <h1>Sorry, Page Not Found</h1>
      <h4>We Are Working On It.</h4>
      <button onClick={backBtn}>Go Back</button>
      </div>
    </div>
  )
}

export default PageNotFound

import React,{useState} from 'react';
import "./register.css";

import {useNavigate} from "react-router-dom"

const Register=()=> {
  const navigate =useNavigate();
  const [Verification,setVerification]=useState('')

   
  return (
    <div className='register1'  style={{height:'100vh',width:'100vw'}}>
      <div className='row' id='row1' style={{height:'50vh',
      width:'50vw',
      background:'white',
      
      borderRadius: '20px',
      boxShadow: '0 0 15px grey',
      padding:'10px'
      }}>
    <h1>Admin create account page</h1>
    <input type="text" className='Verification' onChange={(e)=>{setVerification(e.target.value)}}  placeholder='Enter Verification Code' />
    <div className='button' onClick={checkVerification} style={{width:'100px',height:'50px'}} ><p>Verify</p></div>
   
    </div>
    </div>
    
  )
  function checkVerification(){
    if(Verification==="CrimeGlance@123"){
      navigate("/adminAccount")
    }
    else{
      alert("Only Admin are allowed")
    }
  }
}

export default Register
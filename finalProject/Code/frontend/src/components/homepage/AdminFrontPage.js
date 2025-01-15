import React,{useState} from 'react'
import "./homepage.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AdminFrontpage=()=> {
  const navigate =useNavigate();
  const history=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  let result = ''

  async function submit(e) {
    e.preventDefault();

    // try {
      e.preventDefault();
      console.log(e)

      try{
        await axios.post("http://localhost:8000/AdminFrontPage",{
          email,password
        })
        //console.log(email)
        .then(res=>{
          console.log(res)
          if(res.data==="exist"){
            console.log(res.data)
            otp()
          }
          else if(res.data==="notexist"){
            console.log(res)
            alert("User have not sign up")
            history("/register",{state:{id:email}})
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e)
        })
      }
      catch(e){
          console.log(e);
      }
  }

  return (
    <div className='homepage'>


      <div className='row' style={{
            height:'50vh',
            width:'50vw',
            background:'white',
            
            borderRadius: '20px',
            boxShadow: '0 0 15px grey',
            padding:'10px'
      }}>


            <h1>Log into your account</h1>
            
            <input type="email" className='email' onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email' />
            <input type="text" className='password' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Password' />    
            

            
            <div className='button'>
              <button className='btn1'  style={{marginRight:'10px'}} onClick={submit}>Sign In</button> OR 
              <button className='btn2' style={{marginLeft:'10px'}} onClick={()=>navigate("/register")}>Sign Up</button>
            </div>     
        
            
            

            
        </div>
    </div>

  )

  function otp(){
    axios.post('http://localhost:8003/',{
      emailid:email,
    })
    .then((res)=>{
      result = JSON.parse(JSON.stringify(res.data)).result
      checkOtp()
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  function checkOtp(){
    let otp = prompt("Please Enter OTP","OTP") + " is your OTP"
    if(result===otp){
      navigate('/AdminHomepage')
    }
    else{
      alert("Wrong OTP")
    }
  }
    }

export default AdminFrontpage

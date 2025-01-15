
import React,{useState} 
from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"

const AdminAccount=()=> {
  const history=useNavigate();
  const [fullName,setFullname]=useState('')
  const [userName,setUsername]=useState('')
  
  const [email,setEmail]=useState('')
  const [contact,setContact]=useState('')
  const [alternateContact,setAlternateContact]=useState('')
  const [address,setAddress]=useState('')
  const [password,setPassword]=useState('')
  const [reEnterPassword,setReEnterPassword]=useState('')
  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/AdminAccount",{
        fullName,userName,email,contact,alternateContact,address,password,reEnterPassword
      })
      .then(res=>{
        if(res.data==="exist"){
          alert("User already exists")
          history("/",{state:{id:email}})
        }
        else if(res.data==="notexist"){
          // alert("User have not sign up")
          history("/",{state:{id:email}})
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
    <div className='login'>
    <h1>Admin create account page</h1>
    <form action="POST" className='login1'>
      <input type="text" onChange={(e)=>{setFullname(e.target.value)}}  placeholder='Full Name'/>
      <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  placeholder='Username'/>    
    <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
    <input type="text" name='contact' onChange={(e)=>{setContact(e.target.value)}} placeholder='Contact'/>
    <input type="text" name='alternatecontact' onChange={(e)=>{setAlternateContact(e.target.value)}} placeholder='Alternate Contact'/>
    <input type="text" name='address' onChange={(e)=>{setAddress(e.target.value)}}  placeholder='Address' />
    <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Create Password'/>
    <input type="password" name='repassword' onChange={(e)=>{setReEnterPassword(e.target.value)}}  placeholder='Confirm Password'/>
    <input type="submit" onClick={submit}/>
    </form>
    </div>
  )
}

export default AdminAccount



import React,{useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import './login.css';
import axios from "axios"



function ContactUs(){
    const [yourName,setYourname]=useState('')   
    const [email,setEmail]=useState('')
    const [phoneNo,setPhone]=useState('')
    const [message,setMessage]=useState('')
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
  
      try{
        await axios.post("http://localhost:8000/contact",{
          yourName,
          email,
          phoneNo,
          message
        });
        

        alert('Contact form submitted successfully');
    }
      catch(error){
          console.error(error);
          alert('Error submitting contact form');
      }
    };

    return(
        <>
        <div className="container-fluid" >

        {/* navbar */}

        <div className="row" ><Navbar></Navbar></div>

        {/* leftside */}

        <div className="row" style={{backgroundImage:'url(./images/contactBackground.jpg)',
        height:'100%',
        width: '99.5vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding:'11px'}} >
        <div className="col" style={{marginTop:'30px',marginBottom:"4px",width:'190px'}}>
            <h1 style={{fontSize:'40px',fontWeight:'bold',color:'red'}}>Contact By Police</h1><br/>
            <h3 style={{color:'rgb(255, 102, 60)',fontWeight:'bold'}}>Power to People</h3>
            <p style={{marginBottom:'0',color:'white'}}>Police Whatsapp helpline to curb </p> 
            <p style={{color:'white'}}>corruption in Police Deptt.</p>
            <img src="images/logoPolice.png" alt="" width="140px" height="140px" />
            <img src="images/WhatsApp.webp" alt="" width="100px" height="100px" style={{marginLeft:'70px'}}/>
            <p style={{fontSize:'40px',fontWeight:'bold',color:'rgb(255, 102, 60)'}}>9910641064</p>
            <p style={{marginBottom:'0',color:'red'}}>Send the audio-video clip on above no.</p>
            <p style={{marginBottom:'0',color:'red'}}>OR</p>
            <p style={{color:'red'}}>email them to jtcp-vigilance-dl@nic.in</p>
            
            
        </div>
        
        {/* center */}

        <div className="col">
        <h1 style={{fontSize:'40px',fontWeight:'bold',color:'red',marginTop:'30px'}}>Contact Us</h1>
        <div className="row">
        <p style={{color:'white'}}>
            <EmailIcon/> : CrimeGlance2023@gmail.com <br/>
            <img src="images/man.jpeg" alt="" width="30px" height="30px"/> : 9450783652    
            <img src=" images/lady.jpeg" alt="" width="30px" height="30px" style={{marginLeft:'6px'}}/> : 9670805645 </p>
        </div>
        <form style={{marginTop:'10px'}} action="POST">
            <input type="text" placeholder="Your name" style={{height:'50px',width:'450px'}} value={yourName} onChange={(e)=>{setYourname(e.target.value)}} required/><br/>
            <input type="email"  placeholder="E-mail" style={{height:'50px',width:'450px'}} value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
            <input type="number" placeholder="Phone number" style={{height:'50px',width:'450px'}} value={phoneNo} onChange={(e)=>{setPhone(e.target.value)}} required/><br/>
            <textarea  placeholder="Message" style={{height:'50px',width:'450px'}} value={message} onChange={(e)=>{setMessage(e.target.value)}} required></textarea><br/>
            <button type="submit" style={{height:'50px',width:'150px'}} onClick={handleSubmit}>Submit</button>
        </form>
        
        </div>

        {/* rightside */}

        <div className="col" style={{marginTop:'40px',marginBottom:"4px"}}>
        <h3 style={{color:'red',fontWeight:'bold'}}>Helpline Numbers</h3>
            <h3 style={{color:'white',fontWeight:'bold'}}>1064 and 1800111064</h3>
                <div className="row" style={{color:'white'}}>

            <div className="col-1" style={{width:'400px',fontWeight:'bold',color:'white',marginTop:'10px'}} ><h4>Follow Police Officer</h4> </div>
        <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.youtube.com" target="blank" className="logo"><YouTubeIcon /></a> 
        </div>
        <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.instagram.com/accounts/login/" target="blank" className="logo"><InstagramIcon /></a>
        </div>
        <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569888%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569888&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D9144541%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV_6Hiu1DTky_1mh1gRcROWrkHRYmwU1zTYeb48rIt3YqgO53eOf-b8aAnD6EALw_wcB" target="blank" className="logo"><FacebookIcon /></a>
        </div>
        <div className="col-1" style={{width:'40px'}}>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="blank" className="logo"><TwitterIcon/></a>
        </div>
        </div>
        </div>
        </div>


        {/* footer */}

        <div className="row" style={{backgroundColor:'black',color:'white'}}>

            <Footer></Footer>
        </div>

        </div>
        </>    
    )

}

export default ContactUs;
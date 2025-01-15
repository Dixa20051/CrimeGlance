import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from "./navbar";
import './login.css';
import Feedback from "./Feedbacks";
import Footer from "./footer";
import Police from "./police";

const images = [
    {url:"./images/headquarter1.jpg"},
    {url:"./images/RajVishwa.jpg"},
    {url:"./images/supremeCourt.jpg"},
    {url:"./images/highCourt.jpg"},
    {url:"./images/flag.jpg"},
    {url:"./images/AndhaKanun.avif"},
];
function userHomePage(){
    
    return(
       <>
       <div className="container-fluid" >

        {/* navbar */}

        <div className="row" ><Navbar></Navbar></div>
        
        {/* police */}

       <div className="row">
        <div className="col"  style={{backgroundImage:'url(./images/grey2.avif)',height:'590px',overflow:'scroll'}}>
            <Police></Police>
        </div>

       
        {/* center */}

        <div className="col">
            <div className="row" style={{
                backgroundColor:'white',
                opacity:'0.5',
                padding:'10px',
                fontFamily:'Elephant',
                fontSize:'40px',
                
            }}>
                <center>"Securing your safety, one step at a time."</center>

            </div>
       
     
             
       <div className="row" style={{marginTop:'25px'}}>
            <SimpleImageSlider
                
                width={796}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}>
            </SimpleImageSlider>
            </div>
        </div>
        <div className="col" style={{
             backgroundImage:'url(./images/grey2.avif)',
             overflow:'scroll',
             lineHeight:'2.5em',
             height:'590px',
             fontFamily:'cursive',
             fontSize:'15px'

        }}>

            {/* helpline */}
       
            <b><h3 style={{color:'red',margin:'2px'}}><center>Helpine Numbers</center></h3></b>
            <ul style={{listStyleType:'none'}}>
                <li style={{color:'blue',borderStyle:'outset',marginTop:'6px'}}>National Emergency Number  112 </li>
                <li  style={{color:'green',borderStyle:'outset',marginTop:'6px'}}>Police  100</li>
                <li  style={{color:'blue',borderStyle:'outset',marginTop:'6px'}}>Fire  101</li>
                <li style={{color:'green',borderStyle:'outset',marginTop:'6px'}}>Ambulance  102</li>
                <li  style={{color:'blue',borderStyle:'outset',marginTop:'6px'}}>Women Helpline  1091</li>
                <li style={{color:'green',borderStyle:'outset',marginTop:'6px'}}>Women Helpline - ( Domestic Abuse )  181</li>
                <li  style={{color:'blue',borderStyle:'outset',marginTop:'6px'}}>Railway Accident Emergency Service  1072</li>
                <li style={{color:'green',borderStyle:'outset',marginTop:'6px'}}>Kisan Call Centre 18001801551</li>
                <li  style={{color:'blue',borderStyle:'outset',marginTop:'6px'}}>Children In Difficult Situation 1098</li>
                <li style={{color:'green',borderStyle:'outset',marginTop:'6px'}}>Cyber Crime Helpline  155620</li>
            </ul>
        </div> 
        </div>

        {/* feedback */}

        <div className="row" style={{borderStyle:'inset',borderColor:'red',backgroundImage:'url(./images/grey2.avif)',
            color:'black',height:"350px",overflow:'scroll',}}>
                <Feedback></Feedback>
        </div> 

        {/* footer  */}

        <div className="row" style={{backgroundColor:'brown',color:'whitesmoke'}}>
            <Footer></Footer>
        </div>
        
        </div>
    </>
    )
}

export default userHomePage;
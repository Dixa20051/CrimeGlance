import React from "react";
import Navbar from "./AdminNavbar";
import './register.css';
import Footer from'./AdminFooter';


function aboutUs(){

    return(

        <>
        <div className="container-fluid" >

        {/* navbar */}

        <div className="row" ><Navbar></Navbar></div>

        {/* content */}

        <div className="row" style={{
            backgroundColor:'whitesmoke',
            backgroundImage:'url(./images/crime1.jpg)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}} >

        <div  style={{marginTop:'7%',marginBottom:'6%',color:'black',backgroundColor:'white',padding:'15px',opacity:'0.8',width:'50%',lineHeight:'1.2',fontFamily:'Times New Roman',fontSize:'18px'}}>
            <h1 style={{color:' rgb(88, 85, 85)',textAlign:'center'}} ><p><b>Welcome to Crime Glance !!!</b></p></h1>
        <div class="inner-section"><p>Whenever you move to a new place, you check for the nearby market area,
                weather, etc. So why not crime rate?
            </p></div>
            
            <p>Afterall, we want to stay safe and secure.</p>
            <p> We put together our top online security tips & best possible to help 
                you stay safe.
            Crime Glance is a platform where you can check for the safety of your
                place.
                </p>
            <p>Join us in the fight against crime with our cutting edge crime rate 
                prediction.
            Your safety is our top priority. Trust us to help you make informed 
                decision.
            </p>
            <p style={{fontFamily:'cursive',fontSize:'20px',color:' rgb(88, 85, 85)',textAlign:'center'}}><b>Stay informed, Stay vigilant, Stay safe!</b></p>
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

export default aboutUs;
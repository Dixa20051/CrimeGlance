import React from "react";
import Navbar from "./navbar";
import './login.css';
import Footer from "./footer";
import {useNavigate} from "react-router-dom"

function CrimeInfo() {
    const navigate =useNavigate();
    return(

        <>
        <div className="container-fluid" >

        {/* Navbar */}

        <div className="row" ><Navbar></Navbar></div>

        {/* content */}
        <div style={{display:'flex',
            // flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',}}>
        <div className="row" style={{
            backgroundColor:'white', 
            marginTop:'3%',
            marginBottom:'3.5%',
            width:'47%',
            opacity:'0.9',
            padding:'12px'
            }}>
            <center><h2>Select the option</h2></center>
        

            <div className="row" style={{textAlign:'center'}}>
                <div className="col">
                    <img src="./images/safeUnsafe.jpg" alt="" width={'190px'} height ={'170px'} /><br></br>
                    <input type="radio" name="CrimeInfo" onClick={()=>navigate("/CitySafe")} style={{marginRight:'4px'}}></input>Safe/Unsafe.
                </div>
                <div className="col">
                <img src="./images/cityDetail1.jpg" alt="" width={'190px'} height ={'170px'} /><br></br>
                <input type="radio" name="CrimeInfo" onClick={()=>navigate("/CityDetail")} style={{marginRight:'4px'}}></input>City Detail
                </div>
            </div>
            <div className="row" style={{textAlign:'center'}}>    
                <div className="col">
                    <img src="./images/CrimeDistribution.jfif" alt="" width={'190px'} height ={'170px'} /><br></br>
                    <input type="radio" name="CrimeInfo" onClick={()=>navigate("/CrimeDistribution")} style={{marginRight:'4px'}}></input>Crime Distribution
                </div>
                <div className="col">
                <img src="./images/helpline.jpg" alt="" width={'190px'} height ={'170px'} /><br></br>
                <input type="radio" name="CrimeInfo" onClick={()=>navigate("/HelplineFIR")} style={{marginRight:'4px'}}></input>Helpline/eFIR
                </div>
            </div>
            </div>
        </div>


         {/* footer */}

         <div className="row" style={{
                backgroundColor:'black',
                color:'white'
            }}>

            <Footer></Footer>

        </div>
        </div>


        </>
    )

}

export default CrimeInfo;
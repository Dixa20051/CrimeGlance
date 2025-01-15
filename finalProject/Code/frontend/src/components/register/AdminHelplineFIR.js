import React from "react";
import Navbar from "./AdminNavbar";
import Footer from "./AdminFooter";


function AdminHelplineFIR(){
  const changeBackground=(e) => {
    e.target.style.background = 'rgb(14, 43, 82)';
    e.target.style.color = 'white';

  };

  const changeBackgroundOut=(e) => {
    e.target.style.background = 'rgb(20, 59, 112)';
    e.target.style.color = 'white';

  };

    return(

        <>
        <div className="container-fluid" >

        {/* Navbar */}

        <div className="row" ><Navbar></Navbar></div>

        {/* content */}

        <div className="row" style={{
            backgroundImage:'url(./images/crime1.jpg)',
            
        }} >


       

        <div  style={{
          width:"100vw",
            color:'black',
            backgroundColor:'white',
            padding:'15px',
            opacity:'0.8',
            lineHeight:'1.2',
            fontFamily:'Times New Roman',
            fontSize:'18px'
        }}>

          <div className="row">          
            <div style={{backgroundColor:"black",fontSize:"30px",color:"wheat"}}>
              <center><p style={{marginTop:"40px"}}>It is an Independent website and not related for government authorities</p></center>
              <center><p>Sharing awareness to common people. Information shared is for welfare </p></center>
              <center><p> Purpose only and subject to terms and conditions since 2015 </p></center>
              <center><p style={{backgroundColor:"white",color:"rgb(20, 59, 112)",width:"500px",height:"40px",fontWeight:"bold",marginBottom:"40px",}}>State wise Helpline And eFIR Menu </p></center> 
            </div>           
            </div>           
           
            <div className="row">
            <div className="col" style={{marginTop:"30px"}}>
            <a href="https://citizen.appolice.gov.in/" target="_blank" rel="noreferrer" ><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px',}}>ANDHRA PRADESH - 112</button></a><br/>
            <a href="https://police.andaman.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>ANDAMAN & NICOBAR - 100</button><br/></a>
            <a href="https://arunpol.nic.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>ARUNACHAL PRADESH - 100</button></a><br/>
            <a href="https://police.assam.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>ASSAM - 100</button></a><br/>
            <a href="https://biharonlineportal.com/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>BIHAR - 100</button></a><br/>
            <a href="https://chandigarhpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>CHANDIGARH - 112</button></a><br/>
            <a href="https://cgpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>CHHATISGARH - 112</button></a><br/>
            <a href="https://delhipolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>DELHI - 112</button></a><br/>
            <a href="https://police.ddd.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>DAMAN & DIU - 100</button></a><br/>
            </div>
            <div className="col" style={{marginTop:"30px"}}>
            <a href="https://citizen.goapolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>GOA - 112</button></a><br/>
            <a href="https://gujhome.gujarat.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>GUJARAT - 112</button></a><br/>
            <a href="http://haryanapoliceonline.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>HARYANA - 100</button></a><br/>
            <a href="https://hpkangra.nic.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>HIMACHAL PRADESH - 0177- 2621711</button></a><br/>
            <a href="https://jofs.jhpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>JHARKHAND - 100</button></a><br/>
          <a href="https://www.jkpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>JAMMU KASHMIR - 0191-2560402</button></a><br/>
          <a href="https://ksp.karnataka.gov.in/" target="_blank" rel="noreferrer"> <button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>KARNATAKA - 112100</button></a><br/>
          <a href="https://keralapolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>KERALA - 100</button></a><br/>
          <a href="https://police.ladakh.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>LADAKH - 100</button></a><br/>
            </div>
          <div className="col" style={{marginTop:"30px"}}>
          <a href="https://lakshadweeppolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>LAKSHDWEEP - 100</button></a><br/>
          <a href="https://mumbaipolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>MAHARASHTRA - 100</button></a><br/>
          <a href="http://www.manipurpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>MANIPUR - 100</button></a><br/>
          <a href="https://citizen.mppolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>MADHYA PRADESH - 100</button></a><br/>
          <a href="https://megpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>MEGHALAYA - 100</button></a><br/>
          <a href="https://police.mizoram.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>MIZORAM - 2322319</button></a><br/>
          <a href="https://police.nagaland.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>NAGALAND - 100</button></a><br/>
          <a href="https://odishapolice.gov.in/?q=node/8" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>ODISHA - 100112</button></a><br/>
          <a href="https://police.py.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>PONDICHERRY - 112</button></a><br/>
            </div>
            <div className="col" style={{marginTop:"30px"}}>
          <a href="https://www.punjabpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>PUNJAB - 112100180018000000</button></a><br/>
          <a href="https://www.police.rajasthan.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>RAJASTHAN - 1005</button></a><br/>
          <a href="https://police.sikkim.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>SIKKIM - 112</button></a><br/>
          <a href="https://eservices.tnpolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>TAMIL NADU - 100112</button></a><br/>
          <a href="https://www.tspolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>TELAGANA - 112</button></a><br/>
          <a href="https://tripurapolice.gov.in/" target="_blank" rel="noreferrer"> <button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>TRIPURA - 112</button></a> <br/>
          <a href="https://uppolice.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>UTTAR PRADESH - 112</button></a><br/>
          <a href="https://uttarakhandpolice.uk.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>UTTARAKHAND - 112</button></a><br/>
          <a href="https://cidwestbengal.gov.in/" target="_blank" rel="noreferrer"><button onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} style={{ width:'280px',height:'55px',color:"white",fontWeight:"bold",backgroundColor:"rgb(20, 59, 112)",borderBlockColor:"Background",'borderRadius':'15px'}}>WEST BENGAL - 112</button></a><br/>       
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

export default AdminHelplineFIR
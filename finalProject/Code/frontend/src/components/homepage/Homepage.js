import React from "react";
import {useNavigate} from "react-router-dom"

function HomePage() {
    const navigate =useNavigate();
    return(

        <>
        <div className="container-fluid" >

      

        {/* content */}
        <div style={{display:'flex',
            // flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',}}>
        <div className="row" style={{
            backgroundColor:'white', 
            marginTop:'12.1%',
            marginBottom:'12.1%',
            width:'47%',
            opacity:'0.9',
            padding:'12px'
            }}>
           
        

            <div className="row" style={{textAlign:'center',paddingTop:'50px',paddingBottom:'50px'}}>
                <div className="col">
                    <img src="./images/user.png" alt="" width={'190px'} height ={'170px'} /><br></br>
                    <input type="radio" name="CrimeInfo" onClick={()=>navigate("/UserFrontPage")} style={{marginRight:'4px'}}></input>User
                </div>
                <div className="col">
                <img src="./images/admin.png" alt="" width={'190px'} height ={'170px'} /><br></br>
                <input type="radio" name="CrimeInfo" onClick={()=>navigate("/AdminFrontPage")} style={{marginRight:'4px'}}></input>Admin
                </div>
            </div>
            </div>
        </div>


         

        </div>


        </>
    )

}

export default HomePage;
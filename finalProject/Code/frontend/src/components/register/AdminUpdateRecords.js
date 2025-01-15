import React from "react";
import Navbar from "./AdminNavbar";
import './register';
import Footer from "./AdminFooter";
import axios from 'axios';

class AdminUpdateRecord extends React.Component {

    state = {
        DistCode:'',
        Year:'',
        StateCode:'',
        StateName:'',
        DistName:'',
        TotalMale:'',
        TotalFemale:'',
        MaleLITPop:'',
        FemaleLITPop:'',
        PerCapita:'',
        TotalCrime:'',
       
    }

    handleInput = (e) =>{
		this.setState({
			[e.target.name]:e.target.value,
		});
	};
    handleSubmit = (e) =>{
		e.preventDefault();
		
	
		axios.post('http://localhost:8004/',{
			DistCode: parseInt(this.state.DistCode),
            Year:parseInt(this.state.Year),
			StateCode:parseInt(this.state.StateCode),
            StateName:(this.state.StateName),
            DistName:(this.state.DistName),
			TotalMale:parseFloat(this.state.TotalMale),
            TotalFemale: parseFloat(this.state.TotalFemale),
            MaleLITPop:parseFloat(this.state.MaleLITPop),
			FemaleLITPop:parseFloat(this.state.FemaleLITPop),
            PerCapita: parseFloat(this.state.PerCapita),
            TotalCrime:parseFloat(this.state.TotalCrime),
			
			
		})
		.then((res) =>{
			this.setState({
                DistCode:'',
                Year:'',
                StateCode:'',
                StateName:'',
                DistName:'',
                TotalMale:'',
                TotalFemale:'',
                MaleLITPop:'',
                FemaleLITPop:'',
                PerCapita:'',
                TotalCrime:'',
                
			})
            alert("Data Successfully Updated");
			console.log(res.data);
		})
		.catch((err) =>{})
	}

    
    render() {
    return(
        <>
        <div className="container-fluid" >

        {/* Navbar */}
        <div className="row" ><Navbar></Navbar></div>

        <div className="row"
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            
        }}>
            <div style={{
                color:'black',
                backgroundColor:'white',
                alignItems:'center',
                opacity:'0.9',
                width:'65%',
                lineHeight:'1.2',
                fontSize:'20px',
                height:'84vh',
                overflow:'scroll',
                }}>
                    <form onSubmit={this.handleSubmit}>
                    <h3 style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Calibri'}}><center><b>Enter the details to add into the DataBase</b></center></h3><br/>
                    
                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'200px'}}>Please Enter District Code:</label>
                    <input type="number" name="DistCode" value={this.state.DistCode} onChange={this.handleInput} required></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'280px'}}>Please Enter Year:</label>
                    <input type="number" name="Year" value={this.state.Year} onChange={this.handleInput}></input><br></br>
                    </p>
                    
                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'115px'}}>Please Enter State Code of the city:</label>
                    <input type="number" name="StateCode" value={this.state.StateCode} onChange={this.handleInput}></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'167px'}}>Please Enter State of the city:</label>
                    <input type="text" name="StateName" value={this.state.StateName} onChange={this.handleInput} required></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'130px'}}>Please Enter Name of the District:</label>
                    <input type="text" name="DistName" value={this.state.DistName} onChange={this.handleInput}></input><br></br>
                    </p>
                    
                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'78px'}}>Please Enter Male Population of the city:</label>
                    <input type="number" name="TotalMale" value={this.state.TotalMale} onChange={this.handleInput}></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'58px'}}>Please Enter Female Population of the city:</label>
                    <input type="number" name="TotalFemale" value={this.state.TotalFemale} onChange={this.handleInput} required></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'35px'}}>Please Enter Total Male Literacy of the city:</label>
                    <input type="number" name="MaleLITPop" value={this.state.MaleLITPop} onChange={this.handleInput}></input><br></br>
                    </p>
                    
                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'20px'}}>Please Enter Total Female literacy of the city:</label>
                    <input type="number" name="FemaleLITPop" value={this.state.FemaleLITPop} onChange={this.handleInput}></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'125px'}}>Please Enter Per Capita of the city:</label>
                    <input type="number" name="PerCapita" value={this.state.PerCapita} onChange={this.handleInput} required></input><br></br>
                    </p>

                    <p style={{display:"flex", justifyContent:"space-evenly"}}>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'112px'}}>Please Enter Total Crime of the city:</label>
                    <input type="number" name="TotalCrime" value={this.state.TotalCrime} onChange={this.handleInput}></input><br></br>
                    </p>
                    
                   
                    
                    <center><button style={{
                        borderRadius:'12px',
                        backgroundColor: 'rgb(24,92,137)',
                        border: 'none',
                        color: 'white',
                        padding: '15px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer',
                        }}>
                            Submit
                        </button></center>
                    </form>

                   
                    
            </div>
        </div>
        
        
        
         {/* footer */}

         <div className="row" style={{
                backgroundColor:'black',
                color:'white',
                
            }}>

            <Footer></Footer>
        </div>
        </div>
        </>    
    )

        }
}

export default AdminUpdateRecord;
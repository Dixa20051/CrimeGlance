import React from "react";
import Navbar from "./navbar";
import './login.css';
import Footer from "./footer";
import axios from 'axios';

class CitySafe extends React.Component {

    state = {
        gdp:'',
        population:'',
        maleLiteracy:'',
        data:'',
    }

    handleInput = (e) =>{
		this.setState({
			[e.target.name]:e.target.value,
		});
	};
    handleSubmit = (e) =>{
		e.preventDefault();
		
	
		axios.post('http://localhost:8001/',{
			gdp: parseFloat(this.state.gdp),
            population:parseFloat(this.state.population),
			maleLiteracy:parseFloat(this.state.maleLiteracy),
			
		})
		.then((res) =>{
			this.setState({
                gdp:'',
                population:'',
                maleLiteracy:'',
				data:JSON.stringify(res.data),
			})
			console.log(res.data);
		})
		.catch((err) =>{})
	}

    result1 = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
				"This city is : "+resu.result
				
			)
		}
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
                marginTop:'7%',
                marginBottom:'6%',
                color:'black',
                backgroundColor:'white',
                alignItems:'center',
                opacity:'0.9',
                width:'55%',
                lineHeight:'1.2',
                fontSize:'20px'
                }}>
                    <form onSubmit={this.handleSubmit}>
                    <h3 style={{marginTop:'20px',color:'black',fontFamily:'Calibri'}}>Please fill the given field for know whether this city is Safe, Unsafe or Moderate Safe</h3>
                    
                    <p>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'94px'}}>Please Enter GDP of the city:</label>
                    <input type="number" name="gdp" value={this.state.gdp} onChange={this.handleInput} required></input><br></br>
                    </p>

                    <p>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'40px'}}>Please Enter Population of the city:</label>
                    <input type="number" name="population" value={this.state.population} onChange={this.handleInput}></input><br></br>
                    </p>
                    
                    <p>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive',marginRight:'15px'}}>Please Enter Male literacy of the city:</label>
                    <input type="number" name="maleLiteracy" value={this.state.maleLiteracy} onChange={this.handleInput}></input><br></br>
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
                            Predict
                        </button></center>
                    </form>

                    <div style={{marginTop:'20px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px'}}><p><b><center>{this.result1()}</center></b></p></div>
                    
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

export default CitySafe;
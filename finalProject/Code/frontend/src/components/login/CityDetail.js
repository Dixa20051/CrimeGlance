import React from "react";
import Navbar from "./navbar";
import './login.css';
import Footer from "./footer";
import axios from 'axios';

class CityDetail extends React.Component {

    state = {
        DistName:'',
        data:'',
    }

    handleInput = (e) =>{
		this.setState({
			[e.target.name]:e.target.value,
		});
	};
    handleSubmit = (e) =>{
		e.preventDefault();
		
	
		axios.post('http://localhost:8002/',{
			DistName: (this.state.DistName),
			
		})
		.then((res) =>{
			this.setState({
                DistName:'',
				data:JSON.stringify(res.data),
			})
			console.log(res.data);
		})
		.catch((err) =>{})
	}

    

    StateName = () =>{
		if(this.state.data !==""){

			let resu = JSON.parse(this.state.data)
			return(
			    "State Name of "+resu.DistName+": "+resu.StateName
				
			)
		}
	}

    TotalPopulation = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Total Population of "+resu.DistName+": "+resu.TotalPopulation
				
			)
		}
	}

    MaleLiteracy = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Male Literacy of "+resu.DistName+": "+resu.MaleLiteracy
				
			)
		}
	}

    FemaleLiteracy = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Female Literacy of "+resu.DistName+": "+resu.FemaleLiteracy
				
			)
		}
	}

    OverallLiteracy = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Overall Literacy of "+resu.DistName+": "+resu.OverallLiteracy
				
			)
		}
	}

    PerCapita = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Per Capita of "+resu.DistName+": "+resu.PerCapita
				
			)
		}
	}

    TotalCrime = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Total Crime of "+resu.DistName+": "+resu.TotalCrime
				
			)
		}
	}

    CrimeRate = () =>{
		if(this.state.data !==""){
			let resu = JSON.parse(this.state.data)
			return(
			    "Crime Rate of "+resu.DistName+": "+resu.CrimeRate
				
			)
		}
	}

    render() {
    return(
        <>
        <div className="container-fluid" >

        {/* Navbar */}
        <div className="row" ><Navbar></Navbar></div>

        < div className="row"
        style={{
            backgroundImage:'url(./images/DetailBackground.jpg)',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 84vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'84vh',
            
        }}>
            {/* className="col" */}
            <div className="col"  style={{
                marginTop:'2%',
                marginBottom:'2%',
                color:'black',
                backgroundColor:'rgb(199,199,199)',
                alignItems:'center',
                opacity:'0.9',
                width:'50%',
                maxHeight:'400px',
                
                lineHeight:'1.2',
                fontSize:'20px'
                }}>
                    <form onSubmit={this.handleSubmit}>
                    <h3 style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Calibri'}}>Please Select the District Name to know the Details of the city</h3>
                    
                    <p>
                    <label style={{marginTop:'20px',color:'rgb(19,26,91)',fontFamily:'Cursive'}}>Please Select District Name:</label>
                    <select name="DistName" value={this.state.DistName} onChange={this.handleInput}>
                    <option>District Name</option>
                        <option>Durg</option>
                        <option>Bastar</option>
                        <option>Raipur</option>
                        <option>Bilaspur</option>
                        <option>Raigarh</option>
                        <option>Surguja</option>
                        <option>Jabalpur</option>
                        <option>Balaghat</option>
                        <option>Chhindwara</option>
                        <option>Narsinghpur</option>
                        <option>Seoni / Shivani</option>
                        <option>Mandla</option>
                        <option>Sagar</option>
                        <option>Damoh</option>
                        <option>Tikamgarh</option>
                        <option>Chhatarpur</option>
                        <option>Panna</option>
                        <option>Rewa</option>
                        <option>Sidhi</option>
                        <option>Satna</option>
                        <option>Shahdol</option>
                        <option>Gwalior</option>
                        <option>Shivpuri</option>
                        <option>Guna</option>
                        <option>Datia</option>
                        <option>Morena</option>
                        <option>Bhind</option>
                        <option>Indore</option>
                        <option>Ratlam</option>
                        <option>Ujjain</option>
                        <option>Mandsaur</option>
                        <option>Dewas</option>
                        <option>Dhar</option>
                        <option>Jhabua</option>
                        <option>Khargone / West Nimar</option>
                        <option>Khandwa / East Nimar</option>
                        <option>Sehore</option>
                        <option>Raisen</option>
                        <option>Vidisha</option>
                        <option>Betul</option>
                        <option>Rajgarh</option>
                        <option>Shajapur</option>
                        <option>Hoshangabad</option>
                        <option>Srikakulam</option>
                        <option>Visakhapatnam</option>
                        <option>East Godavari</option>
                        <option>West Godavari</option>
                        <option>Krishna</option>
                        <option>Guntur</option>
                        <option>S.P.S. Nellore</option>
                        <option>Kurnool</option>
                        <option>Ananthapur</option>
                        <option>Kadapa YSR</option>
                        <option>Chittoor</option>
                        <option>Hyderabad</option>
                        <option>Nizamabad</option>
                        <option>Medak</option>
                        <option>Mahabubnagar</option>
                        <option>Nalgonda</option>
                        <option>Khammam</option>
                        <option>Karimnagar</option>
                        <option>Adilabad</option>
                        <option>Bangalore</option>
                        <option>Kolar</option>
                        <option>Tumkur</option>
                        <option>Mysore</option>
                        <option>Mandya</option>
                        <option>Hassan</option>
                        <option>Shimoge</option>
                        <option>Chickmagalur</option>
                        <option>Chitradurga</option>
                        <option>Bellary</option>
                        <option>Dharwad</option>
                        <option>Belgaum</option>
                        <option>Bijapur / Vijayapura</option>
                        <option>Bidar</option>
                        <option>Raichur</option>
                        <option>Gulbarga / Kalaburagi</option>
                        <option>Dakshina Kannada</option>
                        <option>Uttara Kannada</option>
                        <option>Kodagu / Coorg</option>
                        <option>Chengalpattu MGR / Kanchipuram</option>
                        <option>South Arcot / Cuddalore</option>
                        <option>North Arcot / Vellore</option>
                        <option>Salem</option>
                        <option>Coimbatore</option>
                        <option>Tiruchirapalli / Trichy</option>
                        <option>Thanjavur</option>
                        <option>Madurai</option>
                        <option>Ramananthapuram</option>
                        <option>Thirunelveli</option>
                        <option>The Nilgiris</option>
                        <option>Kanyakumari</option>
                        <option>Thane</option>
                        <option>Raigad</option>
                        <option>Ratnagiri</option>
                        <option>Nasik</option>
                        <option>Dhule</option>
                        <option>Jalgaon</option>
                        <option>Ahmednagar</option>
                        <option>Pune</option>
                        <option>Satara</option>
                        <option>Sangli</option>
                        <option>Solapur</option>
                        <option>Kolhapur</option>
                        <option>Aurangabad</option>
                        <option>Parbhani</option>
                        <option>Beed</option>
                        <option>Nanded</option>
                        <option>Osmanabad</option>
                        <option>Buldhana</option>
                        <option>Akola</option>
                        <option>Amarawati</option>
                        <option>Yeotmal</option>
                        <option>Wardha</option>
                        <option>Nagpur</option>
                        <option>Bhandara</option>
                        <option>Chandrapur</option>
                        <option>Ahmedabad</option>
                        <option>Amreli</option>
                        <option>Banaskantha</option>
                        <option>Bharuch</option>
                        <option>Vadodara / Baroda</option>
                        <option>Bhavnagar</option>
                        <option>Valsad</option>
                        <option>Dangs</option>
                        <option>Jamnagar</option>
                        <option>Junagadh</option>
                        <option>Kheda</option>
                        <option>Kutch</option>
                        <option>Mehsana</option>
                        <option>Panchmahal</option>
                        <option>Rajkot</option>
                        <option>Sabarkantha</option>
                        <option>Surat</option>
                        <option>Surendranagar</option>
                        <option>Ajmer</option>
                        <option>Alwar</option>
                        <option>Banswara</option>
                        <option>Barmer</option>
                        <option>Bharatpur</option>
                        <option>Bhilwara</option>
                        <option>Bikaner</option>
                        <option>Bundi</option>
                        <option>Chittorgarh</option>
                        <option>Churu</option>
                        <option>Dungarpur</option>
                        <option>Ganganagar</option>
                        <option>Jaipur</option>
                        <option>Jaisalmer</option>
                        <option>Jalore</option>
                        <option>Jhalawar</option>
                        <option>Jhunjhunu</option>
                        <option>Jodhpur</option>
                        <option>Kota</option>
                        <option>Nagaur</option>
                        <option>Pali</option>
                        <option>Swami Madhopur</option>
                        <option>Sikar</option>
                        <option>Sirohi</option>
                        <option>Tonk</option>
                        <option>Udaipur</option>
                        <option>Gurdaspur</option>
                        <option>Amritsar</option>
                        <option>Kapurthala</option>
                        <option>Jalandhar</option>
                        <option>Hoshiarpur</option>
                        <option>Roopnagar / Ropar</option>
                        <option>Ludhiana</option>
                        <option>Ferozpur</option>
                        <option>Bhatinda</option>
                        <option>Sangrur</option>
                        <option>Patiala</option>
                        <option>Hissar</option>
                        <option>Gurgaon</option>
                        <option>Jind</option>
                        <option>Mahendragarh / Narnaul</option>
                        <option>Ambala</option>
                        <option>Karnal</option>
                        <option>Rohtak</option>
                        <option>Saharanpur</option>
                        <option>Muzaffarnagar</option>
                        <option>Meerut</option>
                        <option>Buland Shahar</option>
                        <option>Aligarh</option>
                        <option>Mathura</option>
                        <option>Agra</option>
                        <option>Mainpuri</option>
                        <option>Etah</option>
                        <option>Bareilly</option>
                        <option>Budaun</option>
                        <option>Moradabad</option>
                        <option>Shahjahanpur</option>
                        <option>Pilibhit</option>
                        <option>Rampur</option>
                        <option>Bijnor</option>
                        <option>Farrukhabad</option>
                        <option>Etawah</option>
                        <option>Fatehpur</option>
                        <option>Allahabad</option>
                        <option>Jhansi</option>
                        <option>Jalaun</option>
                        <option>Hamirpur</option>
                        <option>Banda</option>
                        <option>Varanasi</option>
                        <option>Mirzpur</option>
                        <option>Jaunpur</option>
                        <option>Ghazipur</option>
                        <option>Ballia</option>
                        <option>Gorakhpur</option>
                        <option>Deoria</option>
                        <option>Basti</option>
                        <option>Azamgarh</option>
                        <option>Lucknow</option>
                        <option>Unnao</option>
                        <option>Rae-Bareily</option>
                        <option>Sitapur</option>
                        <option>Hardoi</option>
                        <option>Kheri</option>
                        <option>Faizabad</option>
                        <option>Gonda</option>
                        <option>Bahraich</option>
                        <option>Sultanpur</option>
                        <option>Pratapgarh</option>
                        <option>Barabanki</option>
                        <option>Nainital</option>
                        <option>Almorah</option>
                        <option>Pithorgarh</option>
                        <option>Chamoli</option>
                        <option>Uttar Kashi</option>
                        <option>Tehri Garhwal</option>
                        <option>Garhwal</option>
                        <option>Cachar</option>
                        <option>Darrang</option>
                        <option>Dibrugarh</option>
                        <option>Goalpara</option>
                        <option>Kamrup</option>
                        <option>Karbi Anglong</option>
                        <option>Lakhimpur</option>
                        <option>North Cachar Hil / Dima hasao</option>
                        <option>Nagaon</option>
                        <option>Sibsagar</option>
                        <option>Bilashpur</option>
                        <option>Chamba</option>
                        <option>Kangra</option>
                        <option>Kinnaur</option>
                        <option>Kullu</option>
                        <option>Lahul & Spiti</option>
                        <option>Solan</option>
                        <option>Mandi</option>
                        <option>Shimla</option>
                        <option>Alappuzha</option>
                        <option>Kannur</option>
                        <option>Eranakulam</option>
                        <option>Kottayam</option>
                        <option>Kozhikode</option>
                        <option>Malappuram</option>
                        <option>Palakkad</option>
                        <option>Kollam</option>
                        <option>Thrissur</option>
                        <option>Thiruvananthapuram</option>
                        <option>Balasore</option>
                        <option>Bolangir</option>
                        <option>Cuttack</option>
                        <option>Dhenkanal</option>
                        <option>Ganjam</option>
                        <option>Kalahandi</option>
                        <option>Keonjhar</option>
                        <option>Koraput</option>
                        <option>Mayurbhanja</option>
                        <option>Phulbani ( Kandhamal )</option>
                        <option>Puri</option>
                        <option>Sambalpur</option>
                        <option>Sundargarh</option>
                        <option>24 Parganas</option>
                        <option>Nadia</option>
                        <option>Murshidabad</option>
                        <option>Burdwan</option>
                        <option>Birbhum</option>
                        <option>Bankura</option>
                        <option>Hooghly</option>
                        <option>Howrah</option>
                        <option>Jalpaiguri</option>
                        <option>Darjeeling</option>
                        <option>Malda</option>
                        <option>Cooch Behar</option>
                        <option>Purulia</option>
                        <option>Midnapur</option>
                        <option>West Dinajpur</option>
                        <option>Muzaffarpur</option>
                        <option>Darbhanga</option>
                        <option>Saharsa</option>
                        <option>Purnea</option>
                        <option>Saran</option>
                        <option>Patna</option>
                        <option>Mungair</option>
                        <option>Bhagalpur</option>
                        <option>Santhal Paragana / Dumka</option>
                        <option>Gaya</option>
                        <option>Hazaribagh</option>
                        <option>Dhanbad</option>
                        <option>Palamau</option>
                        <option>Ranchi</option>
                        <option>Singhbhum</option>
                    </select>
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
                            Detail
                        </button></center>
                    </form>

                    </div>
                   
                    {/* {this.displayPanel()} */}
                    <div className="col"
                                style={{
                                    
                                   //marginTop:'6%',
                                    //marginBottom:'6%',
                                    //color:'black',
                                    //backgroundColor:'white',
                                    alignItems:'center',
                                    opacity:'0.9',
                                    maxWidth:'50%',
                                    maxHeight:'400px',
                                    overflowY:'scroll',
                                    fontSize:'20px'
                                    }}> 

                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.StateName()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.TotalPopulation()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.MaleLiteracy()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.FemaleLiteracy()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.OverallLiteracy()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.PerCapita()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.TotalCrime()}</b></div>
                    <div style={{paddingLeft:'6px',color:'rgb(172,15,15)',fontFamily:'Calibri',fontSize:'30px',backgroundColor:'rgb(199,199,199)'}}><b>{this.CrimeRate()}</b></div>
                    {/* <div><input type="radio" onClick={this.MaleLiteracy()}></input>Male Literacy</div> */}
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

export default CityDetail;


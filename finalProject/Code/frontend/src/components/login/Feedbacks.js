import React,{useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";

function Feedbacks() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [findUs, setFindus] = useState('');
    const [comment, setComment] = useState('');
    const handleSubmit=async(e)=>{
      e.preventDefault();
  
      try{
        await axios.post("http://localhost:8000/feedback",{
          firstname,
          lastname,
          email,
          findUs,
          comment,
        });
        

    alert('Feedback form submitted successfully');
    }
      catch(error){
          console.error(error);
          alert('Error submitting contact form');
      }
    };

    const changeBackground=(e) => {
        e.target.style.background = 'yellow';
        e.target.style.color = 'red';

      };

      const changeBackgroundOut=(e) => {
        e.target.style.background = 'darkcyan';
        e.target.style.color = 'yellow';

      };

    return(
        
        <>
        <form action="POST">
        <b><h3 style={{color:'brown',fontSize:'40px',fontFamily:'serif'}}><b>FEEDBACK</b></h3></b> 
           <h5><p style={{color:'brown'}}><b>We would love to hear from you! Please take a moment to let us know about your experience.</b></p> </h5>
           <div className='col'>
           <div className='col'><label>Full Name</label></div> 
           <span style={{margin:'2px'}}><input type='text' placeholder="First Name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}></input></span> 
           <span  style={{margin:'2px'}}><input type='text' placeholder="Last Name" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}></input></span>
            </div>
            
            <div className='col'>
            
            <div className='col'><label>E-mail</label></div>
            <div className='col' ><input type='text' placeholder='ex:myname@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input></div>
            </div>
            <p>How would you rate your overall experience?</p>
            <div className='row'>
                <div className='col'>
                <label>1</label>
                <div><input type="radio" name="radio1" /></div>
                </div>

                <div className='col'>
                <label>2</label>
                <div><input type="radio" name="radio1" /></div>
                </div>

                <div className='col'>
                <label>3</label>
                <div><input type="radio" name="radio1" /></div>
                </div>

                <div className='col'>
                <label>4</label>
                <div><input type="radio" name="radio1" /></div>
                </div>

                <div className='col'>
                <label>5</label>
                <div><input type="radio" name="radio1" /></div>
                </div>
                
            </div>
            <p>How would you rate our communication with you?</p>

            <div className='row'>
                <div className='col'>
                <label>1</label>
                <div><input type="radio" name="radio2" /></div>
                </div>

                <div className='col'>
                <label>2</label>
                <div><input type="radio" name="radio2" /></div>
                </div>

                <div className='col'>
                <label>3</label>
                <div><input type="radio" name="radio2" /></div>
                </div>

                <div className='col'>
                <label>4</label>
                <div><input type="radio" name="radio2" /></div>
                </div>

                <div className='col'>
                <label>5</label>
                <div><input type="radio" name="radio2" /></div>
                </div>
                
            </div>

            <p>What do you think about our rates compared to competitors?</p>

            <div className='row'>
                <div className='col'>
                <label>1</label>
                <div><input type="radio" name="radio3" /></div>
                </div>

                <div className='col'>
                <label>2</label>
                <div><input type="radio" name="radio3" /></div>
                </div>

                <div className='col'>
                <label>3</label>
                <div><input type="radio" name="radio3" /></div>
                </div>

                <div className='col'>
                <label>4</label>
                <div><input type="radio" name="radio3" /></div>
                </div>

                <div className='col'>
                <label>5</label>
                <div><input type="radio" name="radio1" /></div>
                </div>
                
            </div>
            
            <p>How did you find us?</p>
            <span><input type='text' value={findUs} onChange={(e)=>{setFindus(e.target.value)}}></input></span>
            <p>Please leave any additional questions or comments to help us improve!</p>
            <span><textarea value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea></span>
            
                 <div className="col">
                <Button variant="contained" style={{
                color:'yellow', 
                backgroundColor: 'darkcyan',
                 height:'40px',
                 width:'90px',
                 borderRadius:'90px',
                 textAlign:'center'}} onMouseOver={changeBackground} onMouseOut={changeBackgroundOut} onClick={handleSubmit}>Submit</Button> 
                 </div>
            </form>
        </>
    )
}

export default Feedbacks;
const express = require("express")
const {collection,admincollection,userContact,userFeedback,adminContact,AdminFeedback}=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})


app.post("/UserFrontPage",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        console.log(e)
        res.json("notexist")    
    }
})

app.post("/AdminFrontPage",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await admincollection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        console.log(e)
        res.json("notexist")    
    }
})

app.post("/login",async(req,res)=>{
    const{fullName,userName,age,aadharNo,email,contact,alternateContact,address,password,reEnterPassword}=req.body

    const data={
        fullName:fullName,
        userName:userName,
        age:age,
        aadharNo:aadharNo,
        contact:contact,
        alternateContact:alternateContact,
        address:address,
        email:email,
        password:password,
        reEnterPassword:reEnterPassword
    }

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }

})

//For AdminAccount

app.post("/AdminAccount",async(req,res)=>{
    const{fullName,userName,age,aadharNo,email,contact,alternateContact,address,password,reEnterPassword}=req.body

    const data={
        fullName:fullName,
        userName:userName,
        age:age,
        aadharNo:aadharNo,
        contact:contact,
        alternateContact:alternateContact,
        address:address,
        email:email,
        password:password,
        reEnterPassword:reEnterPassword
    }

    try{
        const check=await admincollection.findOne({email:email})
        if(check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await admincollection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }

})

//user contact us
app.post("/contact",async(req,res)=>{
    const{yourName,email,phoneNo,message}=req.body

    const data= new userContact({
        yourName:yourName,
        email:email,
        phoneNo:phoneNo,
        message:message,
    });
    try{
        await data.save();
        res.send("inserted data..")
    }
    catch(err){
        console.log(err)
    }  
});
//userFeedbackform
app.post("/feedback",async(req,res)=>{
    const{firstname,lastname,email,findUs,comments}=req.body

    const data= new userFeedback({
        firstname:firstname,
        lastname:lastname,
        email:email,
        findUs:findUs,
        comments:comments,
    });
    try{
        await data.save();
        res.send("inserted data..")
    }
    catch(err){
        console.log(err)
    }  
});

//admin contact us
app.post("/AdminContact",async(req,res)=>{
    const{yourName,email,phoneNo,message}=req.body

    const data= new adminContact({
        yourName:yourName,
        email:email,
        phoneNo:phoneNo,
        message:message,
    });
    try{
        await data.save();
        res.send("inserted data..")
    }
    catch(err){
        console.log(err)
    }  
});

//admin Feedbackform
app.post("/adminFeedbackForm",async(req,res)=>{
    const{firstname,lastname,email,findUs,comments}=req.body

    const data= new AdminFeedback({
        firstname:firstname,
        lastname:lastname,
        email:email,
        findUs:findUs,
        comments:comments,
    });
    try{
        await data.save();
        res.send("inserted data..")
    }
    catch(err){
        console.log(err)
    }  
});


app.listen(8000,()=>{
    console.log("port connected");
})
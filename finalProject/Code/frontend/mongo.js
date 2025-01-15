const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://dixa28:dixa@cluster1.zhpqvtq.mongodb.net/",{
    // useNewUelParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log('Failed',err);
    process.exit();
})

const newSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    alternateContact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reEnterPassword:{
        type:String,
        required:true
    },
})

const newAdminSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    alternateContact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reEnterPassword:{
        type:String,
        required:true
    },
})

const contactUs=new mongoose.Schema({
    yourName:String,
    email:String,
    phoneNo:Number,
    message:String,
});
const feedback=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    findUs:String,
    comments:String,
});

const adminContactUs=new mongoose.Schema({
    yourName:String,
    email:String,
    phoneNo:Number,
    message:String,
});

const adminFeedback=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    findUs:String,
    comments:String,
});


const collection=mongoose.model("collection",newSchema)
const admincollection=mongoose.model("admincollection",newAdminSchema)
const userContact=mongoose.model("userContact",contactUs)
const userFeedback=mongoose.model("userFeedback",feedback)
const adminContact=mongoose.model("adminContact",adminContactUs)
const AdminFeedback=mongoose.model("AdminFeedback",adminFeedback)

module.exports={
    collection,admincollection,userContact,userFeedback,adminContact,AdminFeedback
}
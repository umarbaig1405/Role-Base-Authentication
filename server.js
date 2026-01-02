//----Registration Or Login Api
//----Login Api Get
//----Registration Api Post



import express from 'express';

 //----Bcrypt

 import bcrypt from 'bcrypt';



const app = express();

app.use(express.json());



//----Api:localhost:5000/registration
//----Method:
//----Desc:

app.post("/registration",async(req,res)=>{

  const {UserName,UserEmail,UserPass} = req.body
 
  const salt = await bcrypt.genSalt(10);

  var hashpass = await bcrypt.hash(UserPass,salt)

  var newUserData={

        UserName,
        UserEmail,
        UserPass:hashpass

  }


return res.send("newUserData")


})

app.listen(5000,()=>{
    console.log("RUN ")
})

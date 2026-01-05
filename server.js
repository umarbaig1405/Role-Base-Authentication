//----Registration Or Login Api
//----Login Api Get
//----Registration Api Post



import express from 'express';

 //----Bcrypt

 import bcrypt from 'bcrypt';

 //----Database Connectivity

 import ConnectDb from './DB/ConnectionDb.js';

 //------- UserRegs Import

 import UserDataSchema from './DB/Models/UserRegs.js';



const app = express();

app.use(express.json());



//----Api:localhost:5000/registration
//----Method:
//----Desc:

app.post("/registration",async(req,res)=>{

  const {UserName,UserEmail,UserPass} = req.body
 
  const salt = await bcrypt.genSalt(10);

  var hashpass = await bcrypt.hash(UserPass,salt)

  if(!UserName|| !UserEmail|| !UserPass){

   return res.send("All Field Need To Be Filled!!")

  }



  var newUserData={

        UserName,
        UserEmail,
        UserPass:hashpass

  }


  await UserDataSchema.create(newUserData)

return res.send("newUserData")


})


//----Api:localhost:5000/Login
//----Method:Post
//----Desc:Login User

app.post("/login",async(req,res)=>{

   const {UserEmail, UserPassword}= req.body;

   if(!UserEmail|| !UserPassword){

       return res.send("Kind Fill All The Feilds..")

   }


   var UserAvail = await UserDataSchema.findById();


    return res.send(UserAvail)
})


app.listen(5000,()=>{
    ConnectDb();
    console.log("Server Is Running Succesfully")
})

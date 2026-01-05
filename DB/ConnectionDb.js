

import mongoose from "mongoose";


const ConnectDb =async()=>{

   try{
        await mongoose.connect("mongodb+srv://Admin:Admin@rolebaedauth.f5rj4rh.mongodb.net/?appName=RoleBaedAuth")
        console.log("Database Coneected Succesfully !!")

   }catch(Err){
       console.log(Err)
   }

}

export default ConnectDb;
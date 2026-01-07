

import mongoose from "mongoose";


const ConnectDb =async()=>{

   try{
        await mongoose.connect("mongodb+srv://umar:admin@rolebase.pqkpaa8.mongodb.net/?appName=RoleBase")
        console.log("Database Coneected Succesfully !!")

   }catch(Err){
       console.log(Err)
   }

}

export default ConnectDb;

import mongoose from "mongoose";


const UserSchema = mongoose.Schema({

UserName:{

    type:"String"
},

UserEmail:{

    type:"String",
    unique:true
},

UserPass:{
   
    type:"String"

}




})


var UserDataSchema = mongoose.model("User",UserSchema)

export default UserDataSchema;

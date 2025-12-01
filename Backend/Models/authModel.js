import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        required:true,
        unique:true
    }

},{
    timestamps:true
})
const authModel = mongoose.Model("Users",authSchema);
export default authModel;
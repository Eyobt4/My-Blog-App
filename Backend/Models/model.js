import mongoose from "mongoose";

const myModel = mongoose.Schema({
    Message:{
        type:String
    }
});

export default myModel;
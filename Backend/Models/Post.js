import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
        Title:{
            type:String,
            required :true
        },
        Content:{
            type:String,
            required :true
        },
        Author:{
            type:String,
            required :true
        }},
        {timestamps:true}
);
const postModel = mongoose.model("post",postSchema);

export default postModel;
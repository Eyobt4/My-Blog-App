import mongoose  from "mongoose";

const db = ()=>{

    try{
    
        mongoose.connect("mongodb+srv://eyobtesfaye838:eyob838@auth-cluster.cffb4ie.mongodb.net/?appName=auth-cluster");
        console.log("db connected")
    }
    catch(err){
        console.log(err);
        
    }
};

export default db;
import mongoose from "mongoose" ;

const Db_connection = async()=> {
  try {
      await mongoose.connect("mongodb+srv://eyobtesfaye838:eyob838@auth-cluster.cffb4ie.mongodb.net/?appName=auth-cluster");
    console.log("Db connected")
  }    
  catch (error) {
      console.log(error);
      
  }
};
export default Db_connection;
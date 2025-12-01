import mongoose from "mongoose" ;
// import CONNECTION_STRING from "../Config/.env"

const Db_connection = async()=> {
  try {
      await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Db connected")
  }    
  catch (error) {
      console.log(error);
      
  }
};
export default Db_connection;
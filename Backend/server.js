import express  from "express";
import router from "./Routes/userRouter.js" ;
import Db_connection from "./Config/db_config.js";
const app = express();
const port = 5001;

Db_connection();
app.use(express.json());
console.log("hear");

app.use(router);
app.listen(5001,()=>{
    console.log(`server listning at ${port}`);
});

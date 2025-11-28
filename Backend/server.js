import express, { Router } from "express";
import db from "./Config/db_connect.js";
import router from "./Routes/Route.js";

const app = express();
const PORT = 3000;
db();
app.use(router)

app.listen(PORT,()=>{
    console.log(`server running at ${PORT} `);
    
});
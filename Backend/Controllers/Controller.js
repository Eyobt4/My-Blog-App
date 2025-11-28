import express from "express";

const getUser = (req,res)=>{
    res.status(200);
    res.send({message:"get working"})
};

export default getUser;
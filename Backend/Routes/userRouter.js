import express from "express";
const router = express.Router();
import getAllPost from "../Controllers/userControl.js";
import createPost from "../Controllers/userControl.js";
import getSinglePost from "../Controllers/userControl.js";
import updatePost from "../Controllers/userControl.js";
import deletePost from "../Controllers/userControl.js";

router.post("/post", createPost);
router.get("/get",getAllPost);
router.get("/getSinglePost/:id",getSinglePost);
router.put("/updatePost/:id",updatePost);
router.delete("/deletePost/:id",deletePost);


export default router;
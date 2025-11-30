import postModel from "../Models/Post.js";

// create Post
const createPost = async(req,res)=>{
    // await res.json({message:"New Post"});
    try{
        if(!req.body){
            res.status(400).json({message:"All fieldes are required!"});
        };
        const Title = req.body.Title;
        const Content = req.body.Content;
        const Author = req.body.Author;

        if(!Title|!Content|!Author){
            res.status(400).json({message:"All fieldes are required!"});
        };

        const postData = new postModel({
            Title,
            Content,
            Author,
            
        });
        postData.save()
        res.status(200).json({message:"Post created"});

    }
    catch(error){
        console.log(error);
        
    }

}
// get all Post

const getAllPost = async(req,res)=>{
    try{
        console.log("heeear");
        const returnData = await postModel.find();
        res.status(200).json(returnData);

    }
    catch(error){
        console.log(error);
        
    }
};

// get single Post
const getSinglePost = async(req,res)=>{
    try{
        const id = req.params.id;
        const returnData = await postModel.findById(id);
        if(returnData){
            res.status(200).json(returnData);
        }
        else{
            res.status(404).json({message:"Post not found"});
        }

    }
    catch(error){
        console.log(error);
        
    }
};

// update Post
const updatePost = async(req,res)=>{
    try{
        const id = req.params.id;
        const returnData = await postModel.findByIdAndUpdate(id);
        if(returnData){
            if(!req.body){
                res.status(400).json({message:"All fieldes are required!"});
            };
            const Title = req.body.Title;
            const Content = req.body.Content;
            const Author = req.body.Author;

            if(!Title|!Content|!Author){
                res.status(400).json({message:"All fieldes are required!"});
            };

            const postData = new postModel({
                Title,
                Content,
                Author,
                
            });
            postData.save()
            res.status(200).json({message:"Post Updated"});

            }
        else{
            res.status(404).json({message:"Post not found"});
        }

    }
    catch(error){
        console.log(error);
        
    }
};
// delete Post
const deletePost = async(req,res)=>{
    try{
        const id = req.params.id;
        const returnData = await postModel.findById(id);
        if(returnData){
            }
        else{
            res.status(404).json({message:"Post not found"});
        }
        const deletePost = await returnData.deleteOne();

        if(deletePost){

            res.status(200).json({message:"Post deleted "});

            }
        else{
            res.status(404).json({message:"Post still not Deleted"});
        }

    }
    catch(error){
        console.log(error);
        
    }
};



export default (createPost,getAllPost,getSinglePost,updatePost,deletePost);

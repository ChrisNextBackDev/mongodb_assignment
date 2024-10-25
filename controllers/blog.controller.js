const BlogPost = require("../models/blog.model")

const createBlogPost = async (req, res) =>{
    try {
        const blogPost = await BlogPost.create(req.body);
        res.status(201).json(blogPost);
    } catch (error) {
        res.status(400).json({
           message: error.message ? error.message: "Internal Server Error"
        })
    }
}


const getAllBlogs = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find()
        res.json(blogPosts)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


const getBlogById = async (req, res) => {
    try {
        const {id} = req.params;
        const blogPostById = await BlogPost.findById(id);
        if(!blogPostById){
            return res.status(404).json({message: "Blog not Found"});
        }
        res.json(blogPostById)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateBlogById = async (req, res) => {
    try {
        const {id} = req.params;
        const blogPostById = await BlogPost.findByIdAndUpdate(id, req.body, {new: true});
        console.log(blogPostById);
        if(!blogPostById){
            return res.status(404).json({message: "Blog not Found"});
        }
        res.json(blogPostById)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteBlogById = async (req, res) => {
    try {
        const {id} = req.params;
        const blogPostById = await BlogPost.findByIdAndDelete(id);
        console.log(blogPostById);
        if(!blogPostById){
            return res.status(404).json({message: "Blog not Found"});
        }
        res.status(204).json(blogPostById)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {
    createBlogPost,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
}
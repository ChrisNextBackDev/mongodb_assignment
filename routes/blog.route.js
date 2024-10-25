const express = require("express");


const {
    createBlogPost,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById,
} = require("../controllers/blog.controller")

const router = express.Router();

router.route('/').post(createBlogPost).get(getAllBlogs);
router.route('/:id').get(getBlogById).patch(updateBlogById).delete(deleteBlogById)



module.exports = router;
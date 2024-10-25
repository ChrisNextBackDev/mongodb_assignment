const { Schema, model } = require("mongoose");


const blogSchema = new Schema({
    writtenBy: String,
    blogBody:{
        type: String,
        required: [true, "Oga Put down something na"]
    }
},
{
    timestamps: true
})


const BlogPost = model("BlogPost", blogSchema)

module.exports = BlogPost
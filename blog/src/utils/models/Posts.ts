import mongoose from "mongoose";

const { Schema } = mongoose

const Posts =
    new Schema({
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        comments: [{
                author: String,
                content: String
            }]

    }, { timestamps: true })

export default mongoose.models.Posts || mongoose.model("Posts", Posts)
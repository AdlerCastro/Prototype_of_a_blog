import mongoose from "mongoose";

const { Schema } = mongoose

const Comment =
    new Schema({
        author: String,
        content: String,
    });


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
        comments:{ type: [Comment], default: [] }

    }, { timestamps: true })

export default mongoose.models.Posts || mongoose.model("Posts", Posts)
import mongoose from "mongoose";

const { Schema } = mongoose

const Posts =
    new Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        comments: [
            {
                author: String,
                content: String
            }
        ]

    }, { timestamps: true });

export default mongoose.models.Posts || mongoose.model("Posts", Posts)
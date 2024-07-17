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
        }
    }, { timestamps: true })

export default mongoose.models.Posts || mongoose.model("Posts", Posts)
import mongoose from "mongoose";

const { Schema } = mongoose

const User = mongoose.model(
    "User",
    new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    }, {timestamps: true})
)

export default mongoose.models.User || User

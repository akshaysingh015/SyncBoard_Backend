import mongoose from "mongoose";
const boardsSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Page",
            required: true
        },
    },
{ timestamps: true }
)

export const Board = mongoose.model("Board", boardsSchema);

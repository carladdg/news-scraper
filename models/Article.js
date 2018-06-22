import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    blurb: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
})

export default mongoose.model("Article", ArticleSchema);
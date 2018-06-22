import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    body: {
        type: String,
        required: true
    }
})

export default mongoose.model("Note", NoteSchema);
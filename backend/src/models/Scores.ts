import mongoose from "mongoose";
const {Schema} = mongoose;

const scoreSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    highScore: {
        type: Number,
        required: true
    },
    timeAtackScore:{
        type: Number,
    }
});

const Score = mongoose.model('Score', scoreSchema);
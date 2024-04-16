import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture:{
        type: String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zilvitismazeikiai.lt%2FAvatar-Icon-Profile-Icon-Member-Login-Vector-Isolated-Login-746786.html&psig=AOvVaw1fOPZ3h5Rp642e0ArHORle&ust=1713110798114000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi43pnJv4UDFQAAAAAdAAAAABAE"
    }

});

const User = mongoose.model("User", userSchema);
export default User;
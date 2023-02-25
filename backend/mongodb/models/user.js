import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    allProjects: [{type:mongoose.Schema.Types.ObjectId, ref:'Project', default: []}]
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;
import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    user: { type: String, required: true }, 
    password: { type: String, required: true },
});

const User = model("User",UserSchema)

export default User
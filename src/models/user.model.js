const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: [true, "Username is already taken."],
        required: true,
    },
    email: {
        type: String,
        unique: [true, "Email has already reigstered."],
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
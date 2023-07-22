const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  bio: String,
  avatar: String,
  portfolio: String,
  skills: [String],
  social: {
    GitHub: String,
    Twitter: String,
    LinkedIn: String,
  },
})

userSchema.index({
  name: "text",
  location: "text",
  bio: "text",
  skills: "text",
})

const User = mongoose.model("User", userSchema)

module.exports = User

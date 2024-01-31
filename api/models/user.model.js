const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: "Username is required",
    unique: true,
    miinLenght: [3, "Username must be at least 3 characters"],
    lowercase: true,
    match: [/^[a-z0-9]+$/, "Username must be lowercase and without spaces"]
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "User email must be valid"],
    required: "Email is required",
  },
  password: {
    type: String,
    required: "Password is required",
    minLenght: [8, "Password must be at least 8 characters"]
  },
  confirm: {
    type: Boolean,
    default: true,
  },
  profilePic: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  },

},
  {
    toJSON: {
      timestamps: true,
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
  })

userSchema.virtual("posts", {
  ref: "post",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

const User = mongoose.model('User', userSchema)
module.exports = User

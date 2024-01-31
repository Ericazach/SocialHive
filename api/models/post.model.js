const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    minLenght: [3, "Title must be at least 3 characters"],
    lowercase: true,
    match: [/^[a-z0-9]+$/, "Title must be lowercase and without spaces"]
  },
  description: {
    type: String,
    required: "Description is required",
    minLenght: [10, "Description must be at least 10 characters"],
    lowercase: true,
    match: [/^[a-z0-9]+$/, "Description must be lowercase and without spaces"]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "Comment user is required",
  },
},
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  })


const Post = mongoose.model('Post', postSchema)
module.exports = Post
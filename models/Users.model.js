import mongoose from "mongoose";

//UserSchema : Structure of users for database
const users = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    firstname: {
      type: String,
      required: [true, "firstname is required"],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, "lastname is required"],
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "youtube_channels",
    },
    defaultChannel: {
      type: String,
      default: null,
    },
    uploadedVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_videos",
      },
    ],
    channels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_channels",
      },
    ],
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_videos",
      },
    ],
    likedVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_videos",
      },
    ],
    watchLater: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_videos",
      },
    ],
    playlists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_playlist",
      },
    ],
    subscriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "youtube_channels",
      },
    ],
  },
  { timestamps: true }

);

users.statics.getFullProfile = function (userId) {
  return this.findById(userId)
    .populate("channels")
    .populate("defaultChannel")
    .populate({
      path: "playlists",
      populate: {
        path: "videos",
        select: "title videoId thumbnailUrl",
      },
    })
    .populate({
      path: "uploadedVideos",
      select: "title videoId thumbnailUrl",
    });
};

const usersSchema = mongoose.model("youtube_users", users);

export default usersSchema;





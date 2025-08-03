import mongoose from "mongoose";

//videos model to handle videos data
const videoSchema = new mongoose.Schema(
  {
    videoId: { type: String, unique: true },
    title: String,
    thumbnailUrl: String,
    description: String,
    channelId: { type: String },
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: "youtube_users" },
    views: [{ type: mongoose.Schema.Types.ObjectId, ref: "youtube_users" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "youtube_users" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "youtube_users" }],
    uploadDate: { type: Date, default: Date.now },
    videoUrl: String,
    category: String,
    comments: [
      {
        commentId: String,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "youtube_users" },
        text: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("youtube_videos", videoSchema);
























// import mongoose from 'mongoose';

// const videoSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   filename: { type: String, required: true }, // actual file name saved
//   path: { type: String, required: true },     // relative or absolute file path
//   uploadedAt: { type: Date, default: Date.now },
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: "youtube_users"}
// });

// const Video = mongoose.model('youtube_videos', videoSchema);
// export default Video;
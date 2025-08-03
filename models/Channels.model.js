import mongoose from "mongoose";

const channelsSchema = new mongoose.Schema({
  channelId: { type: String },
  channelName: { type: String, required: true },
  handle: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "youtube_users", required: true },
   createdAt: {
    type: Date,
    default: Date.now
  },
   videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "youtube_videos" }],
});

export default mongoose.model("youtube_channels", channelsSchema);
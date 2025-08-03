import mongoose from "mongoose";

//seeding dummy data in database: videos, users, users_playlist and users_channels
const seederSchema = new mongoose.Schema({
  isSeeded: { type: Boolean, default: false },
});

export default mongoose.model("youtube_seeder", seederSchema);
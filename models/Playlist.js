// models/Playlist.js or playlistSchema file
import mongoose from 'mongoose';

//model to handle playlist of users 
//to handle user can add edit their plyalist
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'youtube_users',
    required: true,
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'youtube_videos',
    },
  ],
  isPrivate: {
    type: Boolean,
    default: false,
  },
});

const Playlist = mongoose.model('youtube_playlist', playlistSchema);

export default Playlist;

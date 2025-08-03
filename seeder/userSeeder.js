import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import Playlist from "../models/Playlist.js";
import usersSchema from "../models/Users.model.js";

// USer Seeder : add the dummy data of users in database
export const seedUsers = async () => {

  const hashedPassword = await bcrypt.hash("1234", 10);

  const userData = [
    {
      username: "aishwarya",
      avatar:
        "https://bambinos.live/images/blog/my-favourite-cartoon.jpg",
      email: "aish@gmail.com",
      password: hashedPassword,
      firstname : "Aishwarya" ,
      lastname : "Jadhav",
      playlists: [],
      uploadedVideos: [],
      channels: [],
      defaultChannel: null,
    },
    {
      username: "Internshala",
      avatar:
        "https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1725020909962-clipboard%20(8).webp&w=3840&q=75",
      email: "Internshala@gmail.com",
      password: hashedPassword,
       firstname : "Internshala" ,
      lastname : "internshala",
      playlists: [],
      uploadedVideos: [],
      channels: [],
      defaultChannel: null,
    },
    {
      username: "youtuber",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZgbrSjIpViKA8w_lPAoun85d5Z6Zw1oTng&s",
      email: "youtuber@gmail.com",
      password: hashedPassword,
       firstname : "youtuber" ,
      lastname : "youtube",
      playlists: [],
      uploadedVideos: [],
      channels: [],
      defaultChannel: null,
    },
  ];

  await usersSchema.deleteMany();
  const users = await usersSchema.insertMany(userData);
  console.log("Users seeded");

  const playlistData = [
    {
      name: "Favorites",
      userId: users[0]._id,
      videos: [],
      isPrivate: false,
    },
    {
      name: "Watch Later",
      userId: users[2]._id,
      videos: [],
      isPrivate: false,
    },
    {
      name: "Trending",
      userId: users[2]._id,
      videos: [],
      isPrivate: true,
    },
  ];

  await Playlist.deleteMany();
  const playlists = await Playlist.insertMany(playlistData);

  await usersSchema.updateMany(
    { _id: { $in: users.map((u) => u._id) } },
    { $addToSet: { playlists: { $each: playlists.map((p) => p._id) } } }
  );

  console.log("Playlists seeded");

  return users;
};

import { v4 as uuidv4 } from "uuid";
import usersSchema from "../models/Users.model.js";
import ChannelsModel from "../models/Channels.model.js";

export const seedChannels = async (users) => {
  try {
    const channelDocs = [];
    let index = 1;

    // Create channels for each user
    users.forEach((user) => {
      const channel = {
        channelName: `${user.username}`,
        handle: `@${user.username.toLowerCase()}`,
        channelId: uuidv4(),
        owner: user._id,
        description: `Auto-generated channel for ${user.username}`,
        channelBanner: "https://www.viewsonic.com/library/wp-content/uploads/2021/03/blended-learning-01.png",
        channelImage: "https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1725020909962-clipboard%20(8).webp&w=3840&q=75",
        subscribers: 0,
        subscribersList: [],
        videos: [],
      };
      channelDocs.push(channel);
    });

    
    // Insert channels
    const insertedChannels = await ChannelsModel.insertMany(channelDocs);
    console.log("Channels seeded successfully!");

    // Prepare updates for users to link channels
    const userChannelMap = {};

    insertedChannels.forEach((channel) => {
      const ownerId = channel.owner.toString();
      if (!userChannelMap[ownerId]) {
        userChannelMap[ownerId] = { channels: [], defaultChannel: null };
      }
      userChannelMap[ownerId].channels.push(channel._id);
      if (!userChannelMap[ownerId].defaultChannel) {
        userChannelMap[ownerId].defaultChannel = channel._id;
      }
    });

    // Update users with channels
    const userUpdatePromises = Object.entries(userChannelMap).map(
      async ([userId, { channels, defaultChannel }]) => {
        await usersSchema.findByIdAndUpdate(
          userId,
          { $addToSet: { channels: { $each: channels } }, defaultChannel },
          { new: true }
        );
      }
    );

    await Promise.all(userUpdatePromises);

  } catch (err) {
    console.error("Error seeding channels:", err);
  }
};

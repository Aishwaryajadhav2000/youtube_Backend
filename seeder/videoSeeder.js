import { v4 as uuidv4 } from "uuid";
import Video from "../models/Video.js";
import Playlist from "../models/Playlist.js";
import ChannelsModel from "../models/Channels.model.js";

// Video seeder : add videos in database after run the project
export const seedVideos = async (users, channels) => {
  await Video.deleteMany();

  const aishwarya = users.find((u) => u.username === "aishwarya");
  const internshala = users.find((u) => u.username === "Internshala");
  const youtuber = users.find((u) => u.username === "youtuber");

  // Get channels owned by each user
  const aishChannel = channels.find((ch) => ch.owner.toString() === aishwarya._id.toString());
  const internshalaChannel = channels.find((ch) => ch.owner.toString() === internshala._id.toString());
  const youtuberChannel = channels.find((ch) => ch.owner.toString() === youtuber._id.toString());

  const sampleVideos = [
    {
      videoId: uuidv4(),
      title: "Doraemon and Nobita",
      thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qDF3C-q4N1BgdTi28JBO0sew_9GOoWi5wg&s",
      videoUrl: "https://www.youtube.com/watch?v=TulN9I-emUc",
      description: "Saturday Night Beech-Nut Show. December 05, 1959",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [],
      uploadDate: new Date("2024-09-20"),
      category: "cartoon"
    },
    {
      videoId: uuidv4(),
      title: "LAL PARI.. LAL PARI",
      thumbnailUrl:
        "https://i.ytimg.com/vi/KGn-erOG-Bs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbNBg4zZNBpESjoAOLYWEbxi98jQ",
      videoUrl: "https://www.youtube.com/watch?v=KGn-erOG-Bs",
      description: "LAl pari .... HOUSEFULL 5",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Music",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "shinchan new episode in hindi without zoom effect 2501",
      thumbnailUrl: "https://i.ytimg.com/vi/un9p50UWPhI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD7uU7mvspOHltm7DcnJ4mlmEX6_Q",
      videoUrl: "https://www.youtube.com/watch?v=un9p50UWPhI",
      description:
        "shinchan shinchan in hindi shinchan in hindi new episode  shinchan new episode in hindi without zoom effect 2501",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "cartoon",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "LIVE - Shaun The Sheep",
      thumbnailUrl:
        "https://i.ytimg.com/vi/h-G6J9oHbfY/hq720.jpg?v=68494385&sqp=CKzfqsIG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDh-OB9JezPRgn60i54IMQ8mpj7iw",
      videoUrl:
        "https://www.youtube.com/watch?v=h-G6J9oHbfY",
      description: "LIVE - Shaun The Sheep 🐑 Full Episodes 🐑⭐️ Kids Cartoons, Preschool, New Season!",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Live",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Fear Files | Ep. 30 | Zee TV",
      thumbnailUrl:
        "https://i.ytimg.com/vi/oeYSWghM3r8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaGLBWDdPkaVNE5FHTTKIt3IIqzA",
      videoUrl:
        "https://www.youtube.com/watch?v=oeYSWghM3r8",
      description: "Fear Files - Darr Ki Sacchi Tasveerin is a Hindi horror television series that showcases stories of paranormal incidents and investigations of strange events. It is a series of tales, related to supertural, real-life incidents reported",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Thriller",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "THE EVIL NUN IS BACK AGAIN",
      thumbnailUrl:
        "https://i.ytimg.com/vi/Qy_gn5Vx3Is/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARsA-I628PWK0ekUakfX06tpSLnQ",
      videoUrl: "https://www.youtube.com/watch?v=Qy_gn5Vx3Is",
      description: "AAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Gaming",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Bus Games:Bus Simulator Ultimate,Bus Simulator Indonesia.",
      thumbnailUrl:
        "https://i.ytimg.com/vi/ORZIcNZKUxA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvzkrd_nmrrJXRTH9ajZe5GVOAxQ",
      videoUrl:
        "https://www.youtube.com/watch?v=ORZIcNZKUxA",
      description: "Bus Games:Bus Simulator Ultimate,Bus Simulator Indonesia,Bus Simulator 2023,Coach Bus Simulator",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Gaming",
      comments: [],
    },

    {
      videoId: uuidv4(),
      title: "AC Ki Aisi Ki Taisi",
      thumbnailUrl:
        "https://i.ytimg.com/vi/F0GOyxwrijo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAEPHkhniyvuStidUclj8EJP_2AqA",
      videoUrl:
        "https://www.youtube.com/watch?v=F0GOyxwrijo",
      description:
        "AC Ki Aisi Ki Taisi - Bandbudh Aur Budbak New Episode - Funny Hindi Cartoon For Kids",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Comic Book",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "DRIVING MUMBAI INDIANS IPL 2025",
      thumbnailUrl:
        "https://i.ytimg.com/vi/UiyRrKGJkwI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAsP50BjCZTR2DiqxIqQFfOcb-4uw",
      videoUrl:
        "https://www.youtube.com/watch?v=UiyRrKGJkwI",
      description:
        "DRIVING MUMBAI INDIANS IPL 2025 BUS ON INSANE NARROW ROADS WITH FRIENDS!",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Farming-simula",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Ek Dhansu Love Story | School Love Story |",
      thumbnailUrl:
        "https://i.ytimg.com/vi/oPQBil76uMs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeJXYjQAPRIXxwC_4nVUhNHYfBLA",
      videoUrl:
        "https://www.youtube.com/watch?v=oPQBil76uMs",
      description:
        "Ek Dhansu Love Story | South Movie Hindi Dubbed Full Movie| School Love Story | Priya Varrier Roshan",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Romantic Comedy",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Calling Haunted Numbers You Should Never Call at 3:00 AM",
      thumbnailUrl:
        "https://i.ytimg.com/vi/32RFRPbBtIQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA4ZE3Rr7Mvwfqv5g_3USlMF0FgUA",
      videoUrl:
        "https://www.youtube.com/watch?v=32RFRPbBtIQ",
      description: "Copyright Disclaimer under section 107 of the Copyright Act 1976, allow once is made for for purpose such as criticism, comment, news, reporting, teaching, scholarship and search. Fair use is use permitted by  copyright statute that might otherwise be infringing",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Hunted",
      comments: [],
    },

    {
      videoId: uuidv4(),
      title:
        "Oggy and the Cockroaches",
      thumbnailUrl:
        "https://i.ytimg.com/vi/BstW5GDKVMU/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGE8gYyhlMA8=&rs=AOn4CLDbigAfbODdNpBQQvriLChzpgOXQg",
      videoUrl: "https://www.youtube.com/watch?v=BstW5GDKVMU",
      description:
        "Oggy and the Cockroaches - Sports Fans (S04E26) - Hindi Cartoons for Kids",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "cartoon",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "Ek Daav Bhootacha! (2025) ",
      thumbnailUrl:
        "https://i.ytimg.com/vi/EQbd1oDNW0o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpz7nnTWkPKCp6GPQsyrna7NnoZw",
      videoUrl: "https://www.youtube.com/watch?v=EQbd1oDNW0o",
      description:
        "Ek Daav Bhootacha! (2025) | New Release Marathi Comedy Movie | Makarand Anaspure, Siddharth Jadhav",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Movies",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "From BCA to Amazon 45 LPA in 2025",
      thumbnailUrl:
        "https://i.ytimg.com/vi/T_zHpK1yMvI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3jFy7TlJ6-rPOR3KMYjV6K2npnQ",
      videoUrl: "https://www.youtube.com/watch?v=T_zHpK1yMvI",
      description:"From BCA to Amazon 45 LPA in 2025 | Cracked Amazon without MCA Degree",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Development",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Godzilla x Kong: Supernova | Now in Production",
      thumbnailUrl:
        "https://i.ytimg.com/vi/pa3nW0EYYcQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCwzUOjT4cdKX1zVJMxRMlP7vFtdg",
      videoUrl: "https://www.youtube.com/watch?v=pa3nW0EYYcQ",
      description:
        "Please stand by. Your call is very important to us. Godzilla x Kong: Supernova | Now in production. Only in theaters March 26, 2027. Report a Titan Sighting. Call (240) MON-ARCH",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Movies",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Java Interview Prep 2025 | Questions and Answers",
      thumbnailUrl:
        "https://i.ytimg.com/vi/TfZdGkExkGw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAomMBMXdr2QkmwddFYd1o0qqDYwA",
      videoUrl: "https://www.youtube.com/watch?v=TfZdGkExkGw",
      description:
        "Java Interview Prep 2025 | Questions and Answers!",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Java",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "The Walking Dead: Dead City Season 2 First Scene",
      thumbnailUrl:
        "https://i.ytimg.com/vi/ewSY2KWW9t4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgZFf_VqUgOCpAutRv79QTWO7yUw",
      videoUrl: "https://www.youtube.com/watch?v=ewSY2KWW9t4",
      description:
        "We are BACK in the New York groove and it all starts here. 🧟‍♀️",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Entertainment",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Best AI Tools to Get An Internship in 2025 For College Students",
      thumbnailUrl:
        "https://i.ytimg.com/vi/3ABtu_AfxJQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDH8dDiVHjHR28Keo-lghA33fL6ZA",
      videoUrl: "https://www.youtube.com/watch?v=3ABtu_AfxJQ",
      description:
        "Are you tired of sending out countless internship applications without getting noticed? Want to stand out from the competition and land your dream internship?",
      channelId: internshalaChannel.channelId,
      uploader: internshala._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Education",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Doraemon Cartoon New Episode in Hindi Episode-1 Doraemon Cartoon New Episode review in Hindi",
      thumbnailUrl: "https://i.pinimg.com/736x/f5/fa/98/f5fa980c7dec129eda08274403016a53.jpg",
      videoUrl: "https://youtu.be/qPtjwiJQKWw?si=UNhRXZOuZQSAqER6",
      description: "Doraemon Cartoon New Episode in Hindi Episode-1 ",
      channelId: aishChannel.channelId,
      uploader: aishwarya._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "cartoon",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "TOP Internship Opportunities for College Students OFF CAMPUS in 2025!",
      thumbnailUrl:
        "https://i.ytimg.com/vi/e8K-3koHqZU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDEFNuTIeSMUzjmX29Z_z--PZ9sbQ",
      videoUrl: "https://www.youtube.com/watch?v=e8K-3koHqZU",
      description:
        "Looking for the best internship opportunities for college students off campus in 2025?",
      channelId: internshalaChannel.channelId,
      uploader: internshala._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Education",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Internshala Review - UI/UX Design Placement Guarantee Course",
      thumbnailUrl:
        "https://i.ytimg.com/vi/PdMng6fxr1s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSurtIOQYAzGEgSVTLEc_U0qgFKA",
      videoUrl: "https://www.youtube.com/watch?v=PdMng6fxr1s",
      description:
        "In today's episode of Inki Kahani Inki Zubani will share her journey of becoming an UI/UX Design intern at MakerSharks Inc.",
      channelId: internshalaChannel.channelId,
      uploader: internshala._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Education",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "Internshala Full Stack Development Course Review | Internshala Placement Guarantee CourseInternshala Review - UI/UX Design Placement Guarantee Course",
      thumbnailUrl:
        "https://i.ytimg.com/vi/QY5eeFmIHJo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDerF1Wuo8kIGvPenE0zldlu3ALLA",
      videoUrl: "https://www.youtube.com/watch?v=QY5eeFmIHJo",
      description:
        "In today's episode of Inki Kahani Inki Zubani, Vikas, a student of the Full Stack Development Placement Guarantee",
      channelId: internshalaChannel.channelId,
      uploader: internshala._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Education",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "CI/CD Explained: The DevOps Skill That Makes You 10x More Valuable",
      thumbnailUrl:
        "https://i.ytimg.com/vi/AknbizcLq4w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaNi0KxFn-4rXJO9iOfbU5kl07iA",
      videoUrl: "https://www.youtube.com/watch?v=AknbizcLq4w",
      description:
        "CI/CD Explained with Real Life Examples | How DevOps Teams Automate Everything",
      channelId: internshalaChannel.channelId,
      uploader: internshala._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Education",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "INDIA VS AUSTRALIA ODI FINAL MATCH ",
      thumbnailUrl:
        "https://i.ytimg.com/vi/qUFyj6mMCZ0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC1wQ3PffnEYhINlsX9zx3dtBmf5w",
      videoUrl: "https://www.youtube.com/watch?v=qUFyj6mMCZ0",
      description: "INDIA VS AUSTRALIA ODI FINAL MATCH FULL MATCH HIGHLIGHTS | IND VS AUS MOST THRILLING EVER",
      channelId: internshalaChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Cricket",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "Max’s Song (Full Scene) | Kate Bush - Running Up That Hill | Stranger Things | Netflix",
      thumbnailUrl:
        "https://i.ytimg.com/vi/bV0RAcuG2Ao/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAx4hcsaWZqTQo902pP679h2BEOng",
      videoUrl: "https://www.youtube.com/watch?v=bV0RAcuG2Ao",
      description:
        "It's true: 'Running Up That Hill' by Kate Bush can literally save the universe. ",
      channelId: internshalaChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Science Fiction",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Can You Guess Their IPL Team? 2025 Edition",
      thumbnailUrl: "https://i.ytimg.com/vi/ENpTCt9oKTE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDSLb_H9JUjUOxA-A4Wh2T3naCQ",
      videoUrl: "https://www.youtube.com/watch?v=ENpTCt9oKTE",
      description: "Can You Guess Their IPL Team? 2025 Edition",
      channelId: internshalaChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "Cricket",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title:
        "Pakistan was about to use Nuclear weapon against India? Deep analysis",
      thumbnailUrl:
        "https://i.ytimg.com/vi/bYAMLRrLW_M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD5SyubShLqSUIUbFDrt66cr5EqvQ",
      videoUrl: "https://www.youtube.com/watch?v=bYAMLRrLW_M",
      description: "Click here to enroll",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "news",
      comments: [],
    },
    {
      videoId: uuidv4(),
      title: "Honey Bunny Cartoon",
      thumbnailUrl: "https://i.ytimg.com/vi/mug-jiFVAKQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxoEpnptBs5LCC3fH1GwkwvZoFFA",
      videoUrl: "https://www.youtube.com/watch?v=mug-jiFVAKQ",
      description: " Stories for children| Kids videos | Honey Bunny Cartoon",
      channelId: youtuberChannel.channelId,
      uploader: youtuber._id,
      views: [aishwarya._id, youtuber._id],
      likes: [internshala._id, youtuber._id],
      dislikes: [aishwarya._id],
      uploadDate: new Date("2024-09-22"),
      category: "StoryTelling",
      comments: [],
    }
  ];

  const insertedVideos = await Video.insertMany(sampleVideos);
  console.log("Videos seeded");

  // Add videos to playlists
  const favoritePlaylist = await Playlist.findOne({ name: "Favorites" });
  const watchLaterPlaylist = await Playlist.findOne({ name: "Watch Later" });

  if (favoritePlaylist && insertedVideos[0]) {
    favoritePlaylist.videos.push(insertedVideos[0]._id);
    await favoritePlaylist.save();
  }

  if (watchLaterPlaylist && insertedVideos[1]) {
    watchLaterPlaylist.videos.push(insertedVideos[1]._id);
    await watchLaterPlaylist.save();
  }

  // Update each channel's `videos` array
  const updatePromises = insertedVideos.map((video) =>
    ChannelsModel.findOneAndUpdate(
      { channelId: video.channelId },
      { $addToSet: { videos: video._id } }
    )
  );

  await Promise.all(updatePromises);
  console.log("Channels updated with their videos!");
};

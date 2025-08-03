import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import {runAllSeeders} from './seeder/masterSeeder.js'

const app = express();
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 8000;



//allowed origins of frontend
const allowedOrigins = [
  
   "http://localhost:4200"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// MiddleWare
// For invalid routing
// app.use((req, res) => {
//     res.status(502).json({
//         error: "Invalid routing",
//         message: `The requested URL ( ${req.originalUrl} ) not found on this server.. Please Enter valid URL.`
//     })
// })

//  middleware => Error-handling
// app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//         return res.status(417).json({
//             error: "Invalid JSON",
//             message: "Please check your request body. Make sure JSON is properly formatted."
//         });
//     }
//     next(err); // Pass to default error handler if not a JSON error
// });

//  Connects to the database and starts the Express server.
connectDB().then(async () => {
  await runAllSeeders();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
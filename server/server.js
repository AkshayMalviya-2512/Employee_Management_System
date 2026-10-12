import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(multer().none()); // Use multer for handling multipart/form-data

//Routes
app.get('/', (req, res) => {
    res.send('Server running');
});

await connectDB(); // Connect to MongoDB before starting the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
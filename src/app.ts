import express from "express";
import "dotenv/config";
import { connectDB } from "config/db";
import initDatabase from "config/seed";
import webRoutes from "routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//routes
webRoutes(app);

//config static files
app.use(express.static("public"));

//seeding data
initDatabase();

// Khởi động server và kết nối database
const startServer = async () => {
  try {
    // Kết nối database
    await connectDB();

    // Khởi động server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

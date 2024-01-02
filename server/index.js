import express from "express";
import dotenv from "dotenv";
import Connection from "./connection/db.js";
import router from "./routes/apiRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

Connection();

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("app is running at port 3000");
});

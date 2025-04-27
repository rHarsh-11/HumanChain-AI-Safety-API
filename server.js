import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import incidentRoutes from "./routes/incidentRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api', incidentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`HumanChain AI Safety Incident Log API server running on ${PORT}`)
});